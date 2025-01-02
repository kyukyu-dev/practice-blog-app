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
      <div className="post__list">Post List</div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  )
}
