import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        cover_image: fields.image({
          label: 'Cover image',
          directory: 'src/assets/cover_images/posts',
          publicPath: '@assets/cover_images/posts/'

          // directory: 'public/images/posts/cover_images',
          // publicPath: '/images/posts/cover_images/',
          // validation: {
          //   isRequired: true,
          // },
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
});
