import { MdPerson } from 'react-icons/lib/md'

export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  icon: MdPerson, 
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
}
