import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from 'react';
import DataTable from "~/components/Datatable";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};


export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Name',
  //       accessor: 'name',
  //     },
  //     {
  //       Header: 'Age',
  //       accessor: 'age',
  //     },
  //     {
  //       Header: 'City',
  //       accessor: 'city',
  //     },
  //   ],
  //   []
  // );

  // const data = [
  //   { name: 'John', age: 30, city: 'New York' },
  //   { name: 'Alice', age: 25, city: 'Los Angeles' },
  //   { name: 'Bob', age: 35, city: 'Chicago' },
  //   // Add more data as needed
  // ];
  console.log(posts, 'posts'); 
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <div>
        <h1>Table</h1>
        <div className="App">
          <h1 className="text-3xl font-semibold text-center my-4">Data Table Example</h1>
          <DataTable />
        </div>
      </div>
    </main>
  );
}