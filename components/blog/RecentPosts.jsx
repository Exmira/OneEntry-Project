import { recentPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Recent Posts</h4>
      <div className="sidebar__post-list">
        {recentPosts.map((post) => (
          <div key={post.id} className="sidebar__post-item">
            <div className="sidebar__post-thumb">
              <Link scroll={false} href={`/blog-details/${post.id}`}>
                <Image
                  width={80}
                  height={76}
                  src={post.smallImageUrl}
                  alt="img"
                />
              </Link>
            </div>
            <div className="sidebar__post-content">
              <h5 className="title">
                <Link scroll={false} href={`/blog-details/${post.id}`}>
                  {post.title}
                </Link>
              </h5>
              <span className="date">
                <i className="flaticon-time"></i>
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
