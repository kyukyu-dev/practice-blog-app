import Link from 'next/link'

interface PostListProps {
  hideNavigation?: boolean
}

export function PostList({ hideNavigation }: PostListProps) {
  return (
    <>
      {!hideNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quod facilis a reprehenderit quos debitis, sequi ex fugit
                reiciendis doloremque repellat, consequuntur, dicta alias illo
                porro dolore voluptatibus magni iusto?
              </p>
              <div className="post__utils-box">
                <button className="post__delete">삭제</button>
                <button className="post__edit">수정</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
