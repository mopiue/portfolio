function MediaGroupIcons() {
  const mediaGroupIcons = [
    {
      name: 'telegram',
      path: `${process.env.PUBLIC_URL}/assets/images/mediaGroup/telegram.svg`,
      link: 'https://t.me/artham0n',
    },
    {
      name: 'location',
      path: `${process.env.PUBLIC_URL}/assets/images/mediaGroup/location.svg`,
      link: 'https://www.google.com/maps/dir/City+Center,+Нижний+Новгород,+Нижегородская+обл./56.3274045,44.0042386/@56.3123826,43.9787057,12.57z/data=!4m8!4m7!1m5!1m1!1s0x4151d44898bb375d:0x84aa5c7ba79b239d!2m2!1d44.0057615!2d56.3269473!1m0',
    },
    {
      name: 'github',
      path: `${process.env.PUBLIC_URL}/assets/images/mediaGroup/github.svg`,
      link: 'https://github.com/mopiue',
    },
  ]

  return mediaGroupIcons.map((el, index) => (
    <a href={el.link} target="_blank" rel="noreferrer" key={index}>
      <img src={el.path} alt={el.name} />
    </a>
  ))
}

export default MediaGroupIcons
