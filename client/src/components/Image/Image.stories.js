import React from 'react';

import Image, { imgMap } from '.';

export default {
  title: 'Common Components/Image',
  component: Image,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(imgMap).map((key) => (
      <div
        key={key}
        style={{
          border: '3px solid gold',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image image={key} {...args} />
        <span
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 32,
            textAlign: 'center',
          }}
        >
          Name : {key}
        </span>
      </div>
    ))}
  </div>
);

const ImageFromOutSourceTemplate = (args) => (
  <div
    key={args.src}
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Image key={args.src} {...args} />
    <span
      style={{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
      }}
    >
      src : {args.src}
    </span>
  </div>
);

export const Images = Template.bind({});
Images.args = {};

export const ImageFromOutSource = ImageFromOutSourceTemplate.bind({});
ImageFromOutSource.args = {
  src:
    'https://en.reset.org/files/imagecache/big_image/inline-images/team_remote.jpg',
  width: '80%',
};
