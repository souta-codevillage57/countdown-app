import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea,Heading } from '@chakra-ui/react'

const NewPost = () => {

  const [post, setPosts] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = (data) => {
    async function fetchData() {
      await axios.post("/api/events/", {
        "title": data.title,
        "owner": data.pwner,
        "date": data.date,
        "note": data.note,
        "url": data.url,
        // "delete_key": 
      })
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchData();
  }

  return (
    <>
      <div>
        <Heading>イベント登録</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">タイトル</label>
            <Input id="title" {...register("title", { required: true })} />
            {
              errors.title &&
              <span>※タイトルを入力してください</span>
            }
          </div>
          <div>
            <label htmlFor="owner">主催者</label>
            <Input id="owner" {...register("owner", { required: true })} />
            {
              errors.owner &&
              <span>※主催者を入力してください</span>
            }
          </div>
          <div>
            <label htmlFor="date">日時</label>
            <Input type="datetime-local" id="date" {...register("date", { required: true })} />
            {
              errors.date &&
              <span>※日時を指定してください</span>
            }
          </div>
          <div>
            <label htmlFor="note">note</label>
            <Textarea id="note" {...register("note", { required: true })} />
            {
              errors.note &&
              <span>※noteを入力してください</span>
            }
          </div>
          <div>
            <label htmlFor="url">url</label>
            <Input id="url" {...register("url", { required: true })} />
            {
              errors.url &&
              <span>※urlを貼ってください </span>
            }
          </div>
          <Input type="submit" value="登録する" />
        </form>
      </div>
    </>
  )
}

export default NewPost