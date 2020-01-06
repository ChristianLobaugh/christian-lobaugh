export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e13a6a3aa8a9743cbb9cae0',
                  title: 'Sanity Studio',
                  name: 'christian-lobaugh-studio',
                  apiId: 'f86b4783-4954-4625-be44-f1b5207d7cb3'
                },
                {
                  buildHookId: '5e13a6a3508d52d843eeac91',
                  title: 'Blog Website',
                  name: 'christian-lobaugh',
                  apiId: '50f05bd9-1b12-4f9c-9f01-00ebc3a71d20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianLobaugh/christian-lobaugh',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://christian-lobaugh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
