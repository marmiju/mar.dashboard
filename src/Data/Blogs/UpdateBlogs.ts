import { blog } from "./type";


export const UpdateBlogs = ({ blog }: { blog: blog }) => {
  console.log(blog)
  // fetch(`${import.meta.env.VITE_END_POINT}/blogs`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   },
  //   body: JSON.stringify({blog})
  // })
  
}