import Link from 'next/link'

export function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">test1234@test.com</div>
          <div className="profile__name">하규영</div>
        </div>
      </div>
      <Link href="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  )
}
