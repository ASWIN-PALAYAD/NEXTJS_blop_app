import { addPost, deletePost } from "@/lib/actions"

const ServerActionTestPagae = () => {

    // also use like this
    // const actionComponent = async()=>{
    //     'use server'

    // }

  return (
    <div>
        <form action={addPost}>
            <input type="text"  placeholder="title" name="title"  />
            <input type="text"  placeholder="desc" name="desc"  />
            <input type="text"  placeholder="slug" name="slug"  />
            <input type="text"  placeholder="userId" name="userId" />
            <button>Create</button>
        </form>

        <form action={deletePost}>
            <input type="text" placeholder="postid" name="id" />
            <button>delete</button>
        </form>
    </div>
  )
}

export default ServerActionTestPagae