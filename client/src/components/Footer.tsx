import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src="/images/lowify-white-logo-DR9-6ezs.png" alt="Lowify Logo" className="footer-logo" />
                        <p className="p-normal">A plataforma que transforma seu conhecimento em faturamento escalável.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <a href="#features">Recursos</a>
                        <a href="#showcase">Benefícios</a>
                        <a href="#awards">Premiações</a>
                        <a href="#faq">FAQ</a>
                    </div>
                    <div className="footer-contact">
                        <h4>Contato</h4>
                        <p><strong>Alunos:</strong> suporte@lowify.com</p>
                        <p><strong>Infoprodutores:</strong> comercial@lowify.com</p>
                    </div>
                    <div className="footer-legal">
                        <h4>Informações Legais</h4>
                        <p>Lowify Soluções Digitais Ltda</p>
                        <p>CNPJ: 00.000.000/0001-00</p>
                        <p>Endereço: Av. Paulista, São Paulo - SP</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lowify. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
