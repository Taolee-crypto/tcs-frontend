import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowUpRight, Globe2, Menu, X, ShieldCheck, Music2, Wallet, Landmark, Network, FileMusic, ChartNoAxesCombined, Users, Settings, CircleHelp } from 'lucide-react'

type Language = 'KR' | 'EN'

const nav = [
  { label: 'TCS 소개', en: 'About TCS', to: '/about' },
  { label: '저작권 관리', en: 'Copyright', to: '/copyright' },
  { label: '회원 안내', en: 'Membership', to: '/membership' },
  { label: '플랫폼 연동', en: 'Platform Network', to: '/network' },
  { label: '저작권 금융', en: 'Copyright Finance', to: '/finance' },
  { label: 'GLOBAL', en: 'GLOBAL', to: '/global' },
]

const portalItems = [
  { icon: ChartNoAxesCombined, title: '창작자 포털', desc: '저작물·사용내역·저작권료·금융 관리', to: '/portal/creator' },
  { icon: Landmark, title: '협회 관리자', desc: '회원·권리·징수·분배 및 정책 관리', to: '/portal/association' },
  { icon: Network, title: '유통사·이용사업자', desc: '저작물 및 음악 사용정보 연동', to: '/portal/partner' },
  { icon: Wallet, title: '금융기관 포털', desc: '저작권 수입 검증 및 금융 연계', to: '/portal/finance' },
]

function Shell({ children, language, setLanguage }: { children: React.ReactNode; language: Language; setLanguage: (v: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="site-shell">
    <header className="topbar">
      <Link className="brand" to="/"><span className="brand-mark"><Music2 size={22}/></span><span className="brand-word">TCS<span className="brand-dot">.</span><small> COPYRIGHT SYSTEM</small></span></Link>
      <button className="mobile-menu" aria-label="메뉴" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>{nav.map(item => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{language === 'KR' ? item.label : item.en}</NavLink>)}</nav>
      <div className="top-actions"><button className="language" onClick={() => setLanguage(language === 'KR' ? 'EN' : 'KR')}><Globe2 size={16}/>{language === 'KR' ? 'KR' : 'EN'} <span>⌄</span></button><Link className="login-button" to="/login">로그인 <ArrowUpRight size={15}/></Link></div>
    </header>
    {children}
    <footer className="footer"><div className="footer-brand">TCS<span>.</span></div><p>독립적이고 투명한 글로벌 음악저작권 관리 인프라</p><div className="footer-bottom"><span>© 2026 TCS. All rights reserved.</span><span>이용약관　 개인정보처리방침　 고객지원</span></div></footer>
  </div>
}

function Home({ language }: { language: Language }) {
  const copy = language === 'KR'
  return <main>
    <section className="hero">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="hero-inner">
        <div className="eyebrow"><span/> GLOBAL COPYRIGHT INFRASTRUCTURE</div>
        <h1>{copy ? <>창작의 가치를 지키는<br/><em>새로운 저작권 인프라</em></> : <>Protecting the value of<br/><em>every creation.</em></>}</h1>
        <p>{copy ? <>TCS는 음악저작권의 권리정보와 이용기록, 징수·분배를 연결하는<br className="desktop-break"/> 개방형 글로벌 저작권 관리 인프라입니다.</> : <>An open global infrastructure connecting music rights,<br className="desktop-break"/> usage records, royalty collection and distribution.</>}</p>
        <div className="hero-actions"><Link className="primary-button" to="/about">TCS 알아보기 <ArrowUpRight size={17}/></Link><Link className="text-button" to="/network">플랫폼 연동 안내 <ArrowUpRight size={16}/></Link></div>
        <div className="hero-note"><ShieldCheck size={16}/> 플랫폼 독립성 · 권리 데이터 보호 · 투명한 정산</div>
      </div>
      <div className="hero-side-label">RIGHTS · TRUST · TRANSPARENCY</div>
    </section>
    <section className="principles section-wrap">
      <div className="section-kicker">WHAT WE CONNECT</div><div className="principle-grid">
        <article><span className="principle-icon orange"><FileMusic/></span><h3>권리정보의 표준화</h3><p>창작자와 저작물의 권리정보를 일관된 기준으로 관리합니다.</p></article>
        <article><span className="principle-icon red"><ChartNoAxesCombined/></span><h3>이용기록의 투명성</h3><p>음악이 사용된 기록을 수집하고 검증 가능한 데이터로 연결합니다.</p></article>
        <article><span className="principle-icon orange"><Wallet/></span><h3>정확한 징수와 분배</h3><p>사용료 산정부터 정산과 지급까지 투명한 흐름을 지원합니다.</p></article>
        <article><span className="principle-icon red"><Network/></span><h3>개방형 플랫폼 연동</h3><p>독립적인 유통 플랫폼이 공정한 조건으로 참여할 수 있습니다.</p></article>
      </div>
    </section>
    <section className="network-section"><div className="section-wrap network-inner"><div><div className="section-kicker">ONE INFRASTRUCTURE, OPEN NETWORK</div><h2>하나의 인프라,<br/><em>독립적인 플랫폼 생태계</em></h2><p>TCS는 음원을 직접 유통하지 않습니다. 각 플랫폼은 독립적으로 운영되며, 공통 연동 기준에 따라 저작권 관리 체계에 참여합니다.</p><Link className="inline-link" to="/network">연동 구조 살펴보기 <ArrowUpRight size={16}/></Link></div><div className="network-diagram"><div className="diagram-core"><Music2 size={25}/><b>TCS</b><small>RIGHTS INFRA</small></div><div className="diagram-node node-a">TIMELINK<small>독립 플랫폼</small></div><div className="diagram-node node-b">PLATFORM B<small>외부 플랫폼</small></div><div className="diagram-node node-c">PLATFORM C<small>외부 플랫폼</small></div><div className="diagram-line line-a"/><div className="diagram-line line-b"/><div className="diagram-line line-c"/></div></div></section>
    <section className="portal-section section-wrap"><div className="portal-heading"><div><div className="section-kicker">TCS SERVICE PORTALS</div><h2>목적에 맞는 업무 공간</h2></div><Link className="inline-link" to="/login">포털 로그인 <ArrowUpRight size={16}/></Link></div><div className="portal-grid">{portalItems.map((item, i) => <Link className="portal-card" to={item.to} key={item.to}><span className="portal-icon">{<item.icon size={22}/>}</span><span className="portal-number">0{i+1}</span><h3>{item.title}</h3><p>{item.desc}</p><ArrowUpRight className="portal-arrow" size={18}/></Link>)}</div></section>
    <section className="cta-section"><div className="section-wrap cta-inner"><div><div className="section-kicker">BUILDING A FAIRER MUSIC ECOSYSTEM</div><h2>창작자가 신뢰할 수 있는<br/>저작권 관리의 기준.</h2></div><Link className="primary-button" to="/contact">협력 및 연동 문의 <ArrowUpRight size={17}/></Link></div></section>
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
  return <Shell language={language} setLanguage={setLanguage}><Routes><Route path="/" element={<Home language={language}/>} /><Route path="/portal/*" element={<InfoPage type="portal"/>}/>{Object.keys(pageContent).map(key => <Route key={key} path={key === 'login' || key === 'contact' ? '/' + key : '/' + key} element={<InfoPage type={key}/>} />)}<Route path="*" element={<InfoPage type={location.pathname.split('/').filter(Boolean).pop() ?? 'about'}/>} /></Routes></Shell>
}
