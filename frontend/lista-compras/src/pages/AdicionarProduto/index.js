import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { message, Form, Input, Button, InputNumber } from 'antd';

export default function AdicionarProduto() {
    const history = useHistory();
    const [ disabled, setDisabled ] = useState(false);

    async function handleSubmit(produto) {
        setDisabled(true);
        api.post('/item', produto)
        .then((response) => {
            if(response.status === 201) {
                message.success('Produto adicionado com sucesso!');
                history.push('/produtos');
            }
        })
        .catch((err) => {
            message.error(`Aconteceu um erro ao adicionar o produto ${err.response.data.message}`);
        })
    }

    return(
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <br />
            <div className='form_container'>
                <Form 
                name='submitProduto'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete='off'
                >
                    <Form.Item 
                    label='Nome do item'
                    name='name'
                    rules={[{ required:true, message:'O nome do item não pode ser vazio'}]}
                    >
                        <Input className='add_info' />
                    </Form.Item>

                    <Form.Item 
                    label='Descrição'
                    name='description'
                    rules={[{ required:true, message:'Insira a descrição do item'}]}
                    >
                        <Input className='add_info' />
                    </Form.Item>

                    <Form.Item 
                    label='Quantidade'
                    name='quantity'
                    rules={[{ required:true, message:'Insira a quantidade'}]}
                    >
                        <InputNumber className='add_info'/>
                    </Form.Item>

                    <Form.Item className='form_button'>
                        <Button type='primary' htmlType='submit' disabled={disabled} >
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}