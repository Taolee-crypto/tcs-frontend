import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Globe2, Menu, X, ShieldCheck, Music2, Wallet,
  Landmark, Network, FileMusic, ChartNoAxesCombined, Users, LockKeyhole,
  RadioTower, Scale, BadgeCheck, CircleHelp
} from 'lucide-react'

type Language = 'KR' | 'EN'

const nav = [
  { label: 'TCS 소개', en: 'About TCS', to: '/about' },
  { label: '저작권 관리', en: 'Copyright', to: '/copyright' },
  { label: '회원 안내', en: 'Membership', to: '/membership' },
  { label: '플랫폼 연동', en: 'Platform Network', to: '/network' },
  { label: '저작권 금융', en: 'Copyright Finance', to: '/finance' },
  { label: 'GLOBAL', en: 'GLOBAL', to: '/global' },
]

const portals = [
  { icon: Users, title: '창작자 포털', en: 'Creator Portal', desc: '나의 저작물과 권리, 이용내역 및 저작권료를 확인합니다.', to: '/portal/creator', tag: 'FOR CREATORS' },
  { icon: Landmark, title: '협회 관리자', en: 'Association Portal', desc: '회원·신탁·권리·징수·분배 업무를 관리합니다.', to: '/portal/association', tag: 'FOR ASSOCIATIONS' },
  { icon: Network, title: '유통사·이용사업자', en: 'Business Portal', desc: '독립 플랫폼의 저작물 및 음악 사용정보를 연동합니다.', to: '/portal/partner', tag: 'FOR PARTNERS' },
  { icon: Wallet, title: '금융기관 포털', en: 'Finance Portal', desc: '동의 기반 저작권 수입 확인과 금융 업무를 연결합니다.', to: '/portal/finance', tag: 'FOR FINANCIAL INSTITUTIONS' },
]

function Shell({ children, language, setLanguage }: { children: React.ReactNode; language: Language; setLanguage: (v: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isKr = language === 'KR'
  return <div className="site-shell">
    <header className="topbar">
      <Link className="brand" to="/" aria-label="TCS Home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark"><Music2 size={22}/></span>
        <span className="brand-word">TCS<span className="brand-dot">.</span><small>GLOBAL COPYRIGHT INFRASTRUCTURE</small></span>
      </Link>
      <button className="mobile-menu" aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
        {nav.map(item => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{isKr ? item.label : item.en}</NavLink>)}
      </nav>
      <div className="top-actions">
        <button className="language" onClick={() => setLanguage(isKr ? 'EN' : 'KR')}><Globe2 size={16}/>{language}<span>⌄</span></button>
        <Link className="login-button" to="/login">{isKr ? '로그인' : 'Sign in'} <ArrowUpRight size={15}/></Link>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="footer-main">
        <div><div className="footer-brand">TCS<span>.</span></div><p>독립적이고 투명한 글로벌 음악저작권 관리 인프라</p></div>
        <div className="footer-links"><Link to="/about">TCS 소개</Link><Link to="/network">플랫폼 연동</Link><Link to="/finance">저작권 금융</Link><Link to="/global">GLOBAL</Link><Link to="/contact">문의하기</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 TCS. All rights reserved.</span><span>이용약관　 개인정보처리방침　 고객지원</span></div>
    </footer>
  </div>
}

function Home({ language }: { language: Language }) {
  const kr = language === 'KR'
  return <main className="home">
    <section className="hero hero-v2">
      <div className="hero-grid-bg"/>
      <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
      <div className="hero-inner">
        <div className="eyebrow"><span/> {kr ? 'GLOBAL MUSIC COPYRIGHT INFRASTRUCTURE' : 'GLOBAL MUSIC COPYRIGHT INFRASTRUCTURE'}</div>
        <h1>{kr ? <>음악의 권리를 연결하고<br/><em>창작의 가치를 지킵니다.</em></> : <>Connecting music rights.<br/><em>Protecting creative value.</em></>}</h1>
        <p>{kr
          ? <>TCS는 저작물과 권리정보, 음악 이용기록, 저작권료 정산을 연결하는<br className="desktop-break"/> 개방형 글로벌 음악저작권 관리 인프라입니다.</>
          : <>An open global infrastructure connecting works, rights, usage records<br className="desktop-break"/> and royalty administration.</>}</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/about">{kr ? 'TCS 알아보기' : 'Discover TCS'} <ArrowUpRight size={17}/></Link>
          <Link className="text-button" to="/network">{kr ? '연동 구조 보기' : 'Explore the network'} <ArrowRight size={16}/></Link>
        </div>
        <div className="hero-assurance"><ShieldCheck size={17}/><span>{kr ? '플랫폼 독립성' : 'Platform independence'}</span><i/><span>{kr ? '권리정보 보호' : 'Rights data protection'}</span><i/><span>{kr ? '투명한 정산' : 'Transparent royalties'}</span></div>
      </div>
      <div className="hero-visual" aria-label="TCS rights infrastructure network illustration">
        <div className="visual-halo halo-outer"/><div className="visual-halo halo-inner"/>
        <div className="visual-ring ring-one"/><div className="visual-ring ring-two"/>
        <div className="visual-center"><span><Music2 size={31}/></span><b>TCS</b><small>RIGHTS INFRA</small></div>
        <div className="visual-node v-node-top"><FileMusic size={18}/><span>WORKS & RIGHTS</span></div>
        <div className="visual-node v-node-left"><RadioTower size={18}/><span>USAGE DATA</span></div>
        <div className="visual-node v-node-right"><Wallet size={18}/><span>ROYALTIES</span></div>
        <div className="visual-node v-node-bottom"><Globe2 size={18}/><span>GLOBAL NETWORK</span></div>
        <div className="visual-caption">ONE INFRASTRUCTURE · OPEN ECOSYSTEM</div>
      </div>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="trust-strip">
      <div className="trust-inner">
        <div><b>RIGHTS</b><span>권리정보의 연결</span></div><i/>
        <div><b>USAGE</b><span>이용기록의 검증</span></div><i/>
        <div><b>ROYALTIES</b><span>징수와 분배의 투명성</span></div><i/>
        <div><b>GLOBAL</b><span>국경을 넘는 상호운용</span></div>
      </div>
    </section>

    <section className="intro-section section-wrap">
      <div className="intro-heading">
        <div className="section-kicker">WHY TCS</div>
        <h2>음악 산업의 다양한 주체를<br/><em>하나의 기준으로 연결합니다.</em></h2>
      </div>
      <div className="intro-copy"><p>TCS는 음원을 유통하는 플랫폼이 아닙니다. 창작자와 권리자, 저작권 관리단체, 독립 유통 플랫폼과 금융기관이 각자의 역할을 유지하면서 저작권 데이터를 신뢰할 수 있게 연결하는 공통 인프라입니다.</p><Link className="inline-link" to="/about">TCS의 역할과 원칙 <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="capabilities-section">
      <div className="section-wrap">
        <div className="section-heading-row"><div><div className="section-kicker">CORE INFRASTRUCTURE</div><h2>저작권 관리의 전 과정을<br/><em>하나의 흐름으로.</em></h2></div><p>정보를 연결하고, 이용을 확인하고,<br/>권리자에게 정산이 이어지도록 지원합니다.</p></div>
        <div className="capability-grid">
          <article className="capability-card"><div className="capability-top"><span>01</span><FileMusic/></div><h3>저작물과 권리정보</h3><p>저작물 식별정보와 권리자, 권리관계 및 계약 정보를 일관된 기준으로 연결합니다.</p><Link to="/copyright">자세히 보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>02</span><RadioTower/></div><h3>음악 이용기록</h3><p>방송·공연·매장·온라인 등 다양한 경로의 음악 이용정보를 수집하고 검증합니다.</p><Link to="/copyright">자세히 보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>03</span><Scale/></div><h3>TL 기준과 정책</h3><p>1초를 1 TL로 환산하고, 협회가 정한 적용지수와 정책 이력을 관리합니다.</p><Link to="/copyright">TL 기준 알아보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>04</span><ChartNoAxesCombined/></div><h3>징수·분배·지급</h3><p>이용기록과 권리정보를 바탕으로 산정·징수·분배·지급의 근거를 연결합니다.</p><Link to="/copyright">정산 구조 보기 <ArrowUpRight size={15}/></Link></article>
        </div>
      </div>
    </section>

    <section className="network-section network-v2">
      <div className="section-wrap network-v2-inner">
        <div className="network-copy"><div className="section-kicker">OPEN PLATFORM NETWORK</div><h2>플랫폼은 독립적으로.<br/><em>저작권 관리는 함께.</em></h2><p>TIMELINK를 포함한 각 음원 유통 플랫폼은 독립적인 서비스로 운영됩니다. TCS는 공통 연동 기준과 API를 통해 필요한 권리·이용 데이터를 연결합니다.</p><ul><li><BadgeCheck size={17}/> 모든 참여 플랫폼에 공정한 연동 기준</li><li><LockKeyhole size={17}/> 플랫폼별 고객·영업·정산 데이터 분리</li><li><Network size={17}/> 표준 API 기반의 개방형 연결</li></ul><Link className="inline-link" to="/network">플랫폼 연동 안내 <ArrowUpRight size={16}/></Link></div>
        <div className="ecosystem">
          <div className="eco-top-label">INDEPENDENT SERVICES</div>
          <div className="eco-platforms"><div className="eco-platform"><span className="eco-symbol">T</span><b>TIMELINK</b><small>INDEPENDENT PLATFORM</small></div><div className="eco-platform"><span className="eco-symbol muted"><Music2 size={19}/></span><b>PLATFORM B</b><small>INDEPENDENT PLATFORM</small></div><div className="eco-platform"><span className="eco-symbol muted"><Music2 size={19}/></span><b>PLATFORM C</b><small>INDEPENDENT PLATFORM</small></div></div>
          <div className="eco-connectors"><span/><span/><span/></div>
          <div className="eco-core"><span><Network size={22}/></span><div><b>TCS</b><small>COMMON COPYRIGHT INFRASTRUCTURE</small></div></div>
          <div className="eco-bottom"><div><Users size={17}/> RIGHTS HOLDERS</div><div><Landmark size={17}/> ASSOCIATIONS</div><div><Wallet size={17}/> FINANCIAL PARTNERS</div></div>
          <div className="eco-footnote">Independent platforms · Shared standards · Separated data</div>
        </div>
      </div>
    </section>

    <section className="tl-section">
      <div className="section-wrap tl-inner">
        <div><div className="section-kicker">TL MEASUREMENT FRAMEWORK</div><h2>이용시간을 읽는<br/><em>공통의 기준, TL.</em></h2><p>TL은 음악 이용량을 표준화하기 위한 기준 단위입니다. 기본 이용량을 산출한 뒤, 매체와 이용 유형에 따른 적용지수를 협회 정책에 따라 반영합니다.</p><Link className="inline-link" to="/copyright">TL 적용 기준 알아보기 <ArrowUpRight size={16}/></Link></div>
        <div className="tl-equation"><div className="tl-unit"><strong>1</strong><b>SECOND</b><small>음악 이용시간</small></div><div className="tl-equals">=</div><div className="tl-unit highlight"><strong>1</strong><b>TL</b><small>기본 이용량</small></div><div className="tl-multiply">×</div><div className="tl-index"><span>협회 정책</span><b>적용지수</b><small>매체·이용 유형별 기준</small></div><div className="tl-result">적용 TL <span>기본 TL × 적용지수</span></div><p>TL은 이용량 관리 기준이며, 법적으로 확정된 원화 저작권 사용료와는 구분됩니다.</p></div>
      </div>
    </section>

    <section className="portals-section section-wrap">
      <div className="portal-heading"><div><div className="section-kicker">TCS SERVICE PORTALS</div><h2>역할에 맞는 업무 공간</h2><p>각 참여자는 부여된 권한과 계약 범위 안에서 필요한 서비스를 이용합니다.</p></div><Link className="inline-link" to="/login">통합 로그인 <ArrowUpRight size={16}/></Link></div>
      <div className="portal-grid">{portals.map((item, i) => <Link className="portal-card portal-v2" to={item.to} key={item.to}><div className="portal-card-top"><span className="portal-icon"><item.icon size={22}/></span><span className="portal-number">0{i + 1}</span></div><small>{item.tag}</small><h3>{kr ? item.title : item.en}</h3><p>{item.desc}</p><span className="portal-card-link">{kr ? '포털 안내' : 'Explore portal'} <ArrowUpRight size={15}/></span></Link>)}</div>
    </section>

    <section className="finance-band">
      <div className="section-wrap finance-band-inner"><div className="finance-icon"><Landmark size={27}/></div><div className="finance-band-copy"><div className="section-kicker">COPYRIGHT FINANCE</div><h2>저작권 수입이 창작자의<br/>새로운 금융 기회로 이어지도록.</h2><p>창작자의 동의에 기반한 권리·수입 데이터 검증을 금융기관과 연결합니다. 대출 심사와 금융 조건은 제휴 금융기관이 독립적으로 결정합니다.</p></div><Link className="outline-button" to="/finance">저작권 금융 안내 <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="global-section section-wrap"><div className="global-graphic"><div className="global-globe"><Globe2 size={76} strokeWidth={1}/><span className="globe-dot dot-1"/><span className="globe-dot dot-2"/><span className="globe-dot dot-3"/></div><div className="global-orbit-line"/></div><div className="global-copy"><div className="section-kicker">BEYOND BORDERS</div><h2>음악의 국경을 넘어<br/><em>글로벌 권리 네트워크로.</em></h2><p>국가별 저작권 관리체계와 해외 관리단체, 국제 협력 및 상호관리 구조를 고려해 글로벌 권리정보와 정산 연결 기반을 구축합니다.</p><Link className="inline-link" to="/global">글로벌 네트워크 <ArrowUpRight size={16}/></Link></div></section>

    <section className="final-cta"><div className="section-wrap final-cta-inner"><div><div className="section-kicker">CONNECT WITH TCS</div><h2>더 투명한 음악저작권 생태계,<br/><em>함께 연결해 나갑니다.</em></h2><p>플랫폼 연동과 기관 협력에 관한 문의를 환영합니다.</p></div><div className="final-cta-actions"><Link className="primary-button" to="/contact">협력 및 연동 문의 <ArrowUpRight size={17}/></Link><Link className="text-button" to="/about">TCS 소개 <ArrowRight size={16}/></Link></div></div></section>
  </main>
}

const pageContent: Record<string, { eyebrow: string; title: string; desc: string }> = {
  about: { eyebrow: 'ABOUT TCS', title: '독립적이고 개방적인\n저작권 관리 인프라', desc: 'TCS의 역할과 운영 원칙, 글로벌 음악저작권 관리 체계를 소개합니다.' },
  copyright: { eyebrow: 'COPYRIGHT MANAGEMENT', title: '창작자의 권리를\n정확하게 연결합니다', desc: '저작물 등록, 권리정보, 이용내역, 징수와 분배에 관한 관리 체계입니다.' },
  membership: { eyebrow: 'MEMBERSHIP', title: '회원과 신탁 안내', desc: '회원 유형, 신탁계약, 가입 자격과 절차를 안내합니다.' },
  network: { eyebrow: 'PLATFORM NETWORK', title: '독립 플랫폼을 위한\n공통 연동 인프라', desc: '음원 유통사와 음악 이용사업자는 독립성을 유지하면서 표준 API로 TCS에 연결됩니다.' },
  finance: { eyebrow: 'COPYRIGHT FINANCE', title: '저작권 수입을 기반으로\n창작자의 금융 기회를', desc: '저작권료 지급채권 및 지속적인 저작권 수입 실적을 바탕으로 금융기관과 연계합니다.' },
  global: { eyebrow: 'GLOBAL NETWORK', title: '국경을 넘어 연결되는\n저작권 관리', desc: '국가별 관리단체 및 국제 정산 네트워크와의 협력 기반을 구축합니다.' },
  login: { eyebrow: 'SECURE ACCESS', title: 'TCS 통합 로그인', desc: '부여된 권한에 따라 이용 가능한 업무 포털로 안전하게 접속합니다.' },
  contact: { eyebrow: 'CONTACT TCS', title: '협력 및 연동 문의', desc: '플랫폼 연동, 기관 협력 및 서비스 관련 문의를 접수합니다.' },
}
function InfoPage({ type }: { type: string }) {
  const data = pageContent[type] ?? { eyebrow: 'TCS PORTAL', title: '업무 포털', desc: '권한에 따라 제공되는 TCS 업무 공간입니다.' }
  return <main className="subpage"><div className="subpage-hero"><div className="section-kicker">{data.eyebrow}</div><h1>{data.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1><p>{data.desc}</p><Link className="primary-button" to="/login">로그인 및 이용 안내 <ArrowUpRight size={16}/></Link></div><div className="section-wrap subpage-body"><div className="notice-card"><ShieldCheck size={22}/><div><b>서비스 구축 단계</b><p>이 페이지는 전체 정보구조와 화면 설계를 위한 초기 프론트엔드입니다. 세부 규정과 실제 업무 데이터는 확인된 기준 및 백엔드 연동 계약에 따라 순차적으로 연결합니다.</p></div></div></div></main>
}

export default function App() {
  const [language, setLanguage] = useState<Language>('KR')
  const location = useLocation()
  return <Shell language={language} setLanguage={setLanguage}><Routes>
    <Route path="/" element={<Home language={language}/>} />
    <Route path="/portal/*" element={<InfoPage type="portal"/>}/>
    {Object.keys(pageContent).map(key => <Route key={key} path={'/' + key} element={<InfoPage type={key}/>} />)}
    <Route path="*" element={<InfoPage type={location.pathname.split('/').filter(Boolean).pop() ?? 'about'}/>} />
  </Routes></Shell>
}
