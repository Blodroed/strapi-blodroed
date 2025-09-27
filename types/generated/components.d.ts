import type { Schema, Struct } from '@strapi/strapi';

export interface AuthorSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_author_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'earth';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'https://www.domain.com'>;
    platform: Schema.Attribute.Enumeration<
      [
        'Twitter',
        'Facebook',
        'LinkedIn',
        'Instagram',
        'Discord',
        'GitHub',
        'YouTube',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface BlogContentImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_images';
  info: {
    displayName: 'Content Image';
    icon: 'landscape';
  };
  attributes: {
    Images: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    MetaImage: Schema.Attribute.Text;
  };
}

export interface BlogContentText extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_texts';
  info: {
    displayName: 'Content Text';
    icon: 'file';
  };
  attributes: {
    textBlock: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'author.social-link': AuthorSocialLink;
      'blog.content-image': BlogContentImage;
      'blog.content-text': BlogContentText;
    }
  }
}
