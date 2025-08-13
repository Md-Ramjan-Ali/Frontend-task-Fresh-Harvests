import Blog from '@/components/Home/Blog/Blog';
import React from 'react'

export default function BlogPage() {
  const blogData = [
    {
      id: 1,
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      description: "",
      image: "/images/blog-image1.png",
      link: "#",
    },
    {
      id: 2,
      date: "May 23, 2024",
      title:
        'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
      description: "",
      image: "/images/blog-image2.png",
      link: "#",
    },
    {
      id: 3,
      date: "May 23, 2024",
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      description: "",
      image: "/images/blog-image3.png",
      link: "#",
    },
  ];
  return <Blog blogs={blogData} />;
}
