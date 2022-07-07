export interface PostContentType{
    type: 'paragraph'|'link'
    content: string
  
  }
  export interface UserType{
    name: string
    avatarURL: string
    role: string
  }
  export interface PostType{
    id?: number
    author: UserType,
    content: PostContentType[],
    publishedAt: Date,
  }