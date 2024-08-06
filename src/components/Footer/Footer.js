import "./Footer.scss";

function SocialIconGroup(props) {
    return <div className="social-icon-group">
        {props.icons.map((icon, index) => <SocialIcon key={index} src={icon} />)}
    </div>
}

function SocialIcon(props) {
    return <img className="social-icon cursor-point" src={props.src} alt=""/>
}

function TelInfo(props) {
    return <div className="tel-info">{props.children}</div>
}

function PageLink(props) {
    return <a className="page-link" href={props.href}>{props.children}</a>
}

function LogoContainer() {
    return <div className="footer-logo-container">
        <img src="/icons/logo.svg" className="cursor-point" alt=""/>
    </div>
}

function FooterSection(props) {
    return (
        <section className="footer-section">
            {props.title && <h2 className="section-title">{props.title}</h2>}
            <div className="section-content">
                {props.children}
            </div>
        </section>
    )
}

//main
function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <FooterSection>
                    <LogoContainer />
                </FooterSection>
                <FooterSection title="客戶服務">
                    <PageLink href="#">運送說明</PageLink>
                    <PageLink href="#">退換貨相關</PageLink>
                    <PageLink href="#">付款資訊</PageLink>
                    <PageLink href="#">FAQ</PageLink>
                </FooterSection>
                <FooterSection title="關於我們">
                    <PageLink href="#">品牌故事</PageLink>
                    <PageLink href="#">媒體聯繫</PageLink>
                    <PageLink href="#">Press kit</PageLink>
                </FooterSection>
                <FooterSection title="資訊">
                    <PageLink href="#">隱私權政策</PageLink>
                    <PageLink href="#">Cookie</PageLink>
                    <PageLink href="#">GDPR</PageLink>
                </FooterSection>
                <FooterSection title="追蹤 ALPHA Shop">
                    <TelInfo>+886 02123-45678</TelInfo>
                    <SocialIconGroup icons={[
                        "/icons/facebook.svg",
                        "/icons/instagram.svg",
                        "/icons/whatsapp.svg"
                    ]}/>
                </FooterSection>
            </div>
        </footer>
    )
    
}

export default Footer;