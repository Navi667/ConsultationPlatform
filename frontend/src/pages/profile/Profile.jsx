import React, { useState, useEffect } from 'react';
import {
    Descriptions, Button, Modal,
    DatePicker,
    Form,
    Input,
} from 'antd';
import useDocApply from '../../hooks/doc/useDocApply';
import useSubmitCase from '../../hooks/case/useSubmitCase';
import { useAuthContext } from '../../context/AuthContext';
import { extractDate } from "../../utils/extractTime";
import "./Profile.css"

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};


const Profile = () => {
    const { authUser } = useAuthContext();
    const { submitApply } = useDocApply();
    const { submitCase } = useSubmitCase();

    const items = [
        {
            key: '1',
            label: '姓名',
            children: `${authUser.fullName}`,
        },
        {
            key: '2',
            label: '账号',
            children: `${authUser.username}`,
        },
        {
            key: '3',
            label: '性别',
            children: `${authUser.gender}`,
        },
        {
            key: '4',
            label: '头像',
            children: <img alt='' src={authUser.profilePic} style={{ width: "60px", height: "60px" }}></img>,
        },
        {
            key: '5',
            label: '身份',
            children: `${authUser.permission}`,
        },
        {
            key: "6",
            label: "创建时间",
            children: `${extractDate(authUser.createdAt)}`
        }
    ];
    const [open1, setOpen1] = useState(false)
    const [open, setOpen] = useState(false);
    const [caseInfo, setCaseInfo] = useState({});
    const [openCase, setOpenCase] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form, setForm] = useState({});
    const [formApi] = Form.useForm();


    useEffect(() => {
        const getFormById = async (id) => {
            try {
                const res = await fetch(`/api/application/getById/${id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setForm(data);
            } catch (error) {
                console.log(error.message)
            } finally {
                return;
            }
        }
        getFormById(authUser._id)
        const getCaseById = async (id) => {
            try {
                const res = await fetch(`/api/case/get`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: id })
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setCaseInfo(data);
            } catch (error) {
                console.log(error.message)
            } finally {
                return;
            }
        }
        getCaseById(authUser._id)
    }, [])
    const showModal = () => {
        setOpen(true);
    };
    const showModal1 = () => {
        setOpen1(true);
    }
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleOk1 = () => {
        setOpen1(false)
    }
    const handleCancel = () => {
        setOpen(false);
    };
    const handleCancel1 = () => {
        setOpen1(false);
    };
    const onFinish = async (values) => {
        await submitApply({ ...values, userId: authUser._id })
    }
    const showCaseModal = () => {
        setOpenCase(true);
    }
    const onCaseFinish = async (values) => {
        await submitCase({ ...values, userId: authUser._id });
    }
    const handleCaseOk = () => {
        // 这里的关键是调用form.validateFields，它会触发onFinish，前提是字段验证通过  
        formApi.validateFields()
            .then(values => {
                // 表单验证通过后，values包含了表单的值  
                // 你可以在这里调用你的提交逻辑，例如 onFinish(values)  
                console.log(values);
                onCaseFinish(values);
            })
            .catch(info => {
                // 表单验证不通过，info包含了错误信息  
                console.log('Validate Failed:', info);
            });
    }
    const handleCaseCancel = () => {
        setOpenCase(false);
    }


    // console.log(caseInfo[0].content);

    return (
        <div>
            <Descriptions title="账户信息"
                items={items}
                bordered="true"
                layout='vertical'
                style={{
                    width: "90vw",
                    height: "400px"
                }} />
            <Button style={{ display: "block", marginBottom: "40px" }} onClick={showCaseModal}>
                上传病例
            </Button>
            <Modal title="病例" open={openCase} onOk={handleCaseOk} onCancel={handleCaseCancel} okType='submit' okText="提交">
                <Form
                    {...formItemLayout}
                    variant="filled"
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onCaseFinish}
                    form={formApi}
                >
                    <Form.Item
                        label="病例"
                        name="content"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                        initialValue={caseInfo[0] ? caseInfo[0].content : ""}
                    >
                        <Input.TextArea style={{
                            height: "300px"
                        }}/>
                    </Form.Item>
                </Form>
            </Modal>
            <Button
                type="primary"
                style={{ color: "white", backgroundColor: "blue", width: "150px", height: "50px" }}
                onClick={showModal}
            >
                医生权限申请
            </Button>
            <Modal
                title="医生申请表"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    {...formItemLayout}
                    variant="filled"
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="申请人"
                        name="docName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="所属医院"
                        name="hospital"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="所属科室"
                        name="classroom"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="职级"
                        name="position"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="履历"
                        name="record"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input.TextArea style={{
                            height: "300px"
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="提交日期"
                        name="confirmDate"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit"
                            style={{ color: "white", backgroundColor: "blue", width: "150px", height: "50px" }}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Button type="primary" onClick={showModal1} style={{ marginLeft: "15px", backgroundColor: "red" }}>
                查看申请进度
            </Button>
            <Modal title="申请记录" open={open1} onOk={handleOk1} onCancel={handleCancel1}>
                {form ? <> <p>姓名: {form.docName}</p>
                    <p>科室：{form.classroom}</p>
                    <p>医院：{form.hospital}</p>
                    <p>职位：{form.position}</p>
                    <p>履历：{form.record}</p>
                    <p>提交日期：{form.confirmDate}</p>
                    <p>是否通过：{form.isPass ? "已通过" : "未通过"}</p></> : <></>}
            </Modal>

        </div>
    )
}

export default Profile