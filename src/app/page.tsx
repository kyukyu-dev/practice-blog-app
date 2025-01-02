import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link href="/posts/new">글쓰기</Link>
          <Link href="/posts">게시글</Link>
          <Link href="/profile">프로필</Link>
        </div>
      </header>
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글</div>
      </div>
      <div className="post__list">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="post__list-item">
            <Link href={`/posts/${index}`}>
              <div className="post__profile-box">
                <span className="post__profile" />
                <span className="post__author-name">하규영</span>
                <span className="post__date">2025.01.02 목요일</span>
              </div>
              <div className="post__title">게시글 {index}</div>
              <p className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              </p>
              <div className="post__utils-box">
                <button className="post__delete">삭제</button>
                <button className="post__edit">수정</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link href="/posts/new">글쓰기</Link>
        <Link href="/posts">게시글</Link>
        <Link href="/profile">프로필</Link>
      </footer>
    </div>
  )
}
