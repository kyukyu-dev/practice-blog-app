import Link from 'next/link'

export function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          </div>

          <div className="post__profile-box">
            <span className="post__profile" />
            <span className="post__author-name">하규영</span>
            <span className="post__date">2025.01.02 목요일</span>
          </div>

          <div className="post__utils-box">
            <button className="post__delete">삭제</button>
            <Link href="/posts/edit/1" className="post__edit">
              수정
            </Link>
          </div>

          <p className="post__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quod
            facilis a reprehenderit quos debitis, sequi ex fugit reiciendis
            doloremque repellat, consequuntur, dicta alias illo porro dolore
            voluptatibus magni iusto?
          </p>
        </div>
      </div>
    </>
  )
}
