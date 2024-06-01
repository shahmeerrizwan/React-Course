import React from 'react'
import { useState } from "react"
import { Del, Get, Post, Put } from "./ApiCalling"

export default function ApiHandelingScreen() {
    const [dataList, setDataList] = useState<any>([])


    const callApi = () => {
        Get('users').then((res) => {
            console.log(res.data)
            setDataList([...res.data])
        })
            .catch((err) => {
                console.log(err)
            })
    }
    const postData = () => {
        Post('posts', {
            userId: 1,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const editData = () => {
        Put('posts/2', {
            userId: 1,
            id: 2,
            title: "Something Important",
            body: "ajsdk jas lkdjak la la lkdalk dlsa lkdsaj"
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteData = () => {
        Del('posts/2').then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <>
      <button onClick={callApi}>Get Api Call</button>
      <button onClick={postData}>Post Api Call</button>
      <button onClick={editData}>Edit Api Call</button>
      <button onClick={deleteData}>Delete Data</button>


      <table className="table">
            <tbody>
                {dataList.map((x: any, i: number) => <tr key={i}>
                    <td>{x.name}</td>
                    <td>{x.userName}</td>
                    <td>{x.website}</td>
                    <td>{x.email}</td>
                </tr>)}
            </tbody>
        </table>
    </>
  )
}
