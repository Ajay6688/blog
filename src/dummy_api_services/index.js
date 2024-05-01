

const blogs = [
    {
      id: 1,
      title: "First Blog",
      description: "This is the description of the first blog post.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ifaKKKJRSbteLA-sVfePOg.png",
    },
    {
      id: 2,
      title: "Second Blog",
      description: "This is the description of the second blog post.",
      imageUrl: "https://i.pinimg.com/originals/f1/ff/87/f1ff87319a1457b61176eed85ef703f8.jpg",
    },
    {
      id: 3,
      title: "Third Blog",
      description: "This is the description of the third blog post.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfblpHTWQqmLFkxl8VTO3-HUYk5yaRi0ouGIbaHusKAFa18O2K7JA8DNak_hnOqyC1NE&usqp=CAU",
    },
    {
      id: 4,
      title: "Fourth Blog",
      description: "This is the description of the third blog post.",
      imageUrl: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Fifth Blog",
      description: "This is the description of the third blog post.",
      imageUrl: "https://wallpapercave.com/wp/wp3788133.jpg",
    },
    {
      id: 6,
      title: "Sixth Blog",
      description: "This is the description of the third blog post.",
      imageUrl: "https://wallpapercave.com/wp/wp3788135.jpg",
    },
    {
      id: 7,
      title: "Seventh Blog",
      description: "This is the description of the third blog post.",
      imageUrl: "https://wallpapercave.com/wp/wp3788139.jpg",
    },
  ];

  export const callAllBlogsListDummyApi = ()=>{
    return blogs;
  }

  export const callBlogDummyApi = (id)=>{
    return blogs.find((item) => item.id === Number(id));
  }