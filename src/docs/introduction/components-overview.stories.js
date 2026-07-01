

export default {
    title: 'Design System MS/VisãoGeral',
};


import '../introduction/overview.css';

export const VisaoGeral = {
    name: 'Visão Geral',
    render: () => `
        <section class="ds-content container">
            <span class="ds-content__eyebrow">
                Diretrizes de design
            </span>

            <h1>Visão geral</h1>

            <div class="ds-article-content">
                <h2 id="introducao-2">Introdução</h2>

                <p>
                    As diretrizes de design de um design system são um conjunto de princípios
                    e regras que orientam a criação e manutenção de interfaces de usuário
                    consistentes e coesas. Aqui está um resumo curto:
                </p>

                <div class="ds-overview-grid">
                    ${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/Icon-3.png', 'Identidade visual', 'Define cores, tipografia, logotipos e outros elementos visuais que representam a marca.')}
                    ${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-6.png', 'Componentes', 'Lista de elementos reutilizáveis, como botões, campos de formulário e ícones, com orientações de uso.')}
                    ${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-8.png', 'Padrões gerais', 'Descreve como os usuários interagem com componentes e sistemas, incluindo animações e respostas visuais.')}
                    ${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-5.png', 'Acessibilidade', 'Regras para garantir que o design seja inclusivo e utilizável por pessoas com diversas habilidades.')}
                    ${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-7.png', 'Templates e Layouts', 'Estruturas para organizar conteúdo de forma clara e eficiente.')}
                </div>

                <h2 id="links-relacionados">Links Relacionados</h2>

                <p>
                    Ativar/desativar/ocultar ações: Estados do elemento da interface do usuário
                </p>

                <p>Botões:</p>

                <ul>
                    <li>Quando usar botões de texto ou botões de ícone: Botão – Componentes</li>
                    <li>Diretrizes para botões de texto e ícone: Botão – Diretrizes</li>
                    <li>Rótulos de ação padrão: Terminologia para ações comuns</li>
                </ul>

                <p>Barras de ferramentas:</p>

                <ul>
                    <li>Visão geral da barra de ferramentas</li>
                    <li>Barra de ferramentas de rodapé</li>
                    <li>Barra de ferramentas Tabela</li>
                    <li>Barra de ferramentas do gráfico</li>
                    <li>Barra de ferramentas do cabeçalho</li>
                </ul>
            </div>
        </section>
    `,
};

function overviewCard(image, title, text) {
    return `
        <div class="ds-overview-card">
            <img
                src="${image}"
                alt=""
                class="ds-overview-card__image"
            >

            <div class="ds-overview-card__content">
                <h3>${title}</h3>
                <p>${text}</p>
                <a href="#" class="ds-overview-card__link" aria-label="${title}"></a>
            </div>
        </div>
    `;
};

function card(title, text) {
    return `
        <article style="
            border: 1px solid var(--ds-color-neutral-200, #e5e5e5);
            border-radius: var(--ds-radius-md, 12px);
            background: var(--ds-color-white, #ffffff);
            overflow: hidden;
        ">
            <div style="
                height: 180px;
                background:
                    linear-gradient(135deg, rgba(0,79,159,.12), rgba(40,164,76,.12)),
                    var(--ds-color-neutral-100, #f5f5f5);
            "></div>

            <div style="padding: 24px;">
                <h3 style="
                    margin: 0 0 12px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-4-font-size);
                    line-height: var(--ds-heading-4-line-height);
                    font-weight: var(--ds-heading-4-font-weight);
                ">
                    ${title}
                </h3>

                <p style="
                    margin: 0;
                    color: var(--ds-color-neutral-700, #4f4f4f);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    ${text}
                </p>
            </div>
        </article>
    `;
}

function linkItem(label, href) {
    return `
        <a
            href="${href}"
            target="_top"
            style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 0;
                border-bottom: 1px solid var(--ds-color-neutral-200, #e5e5e5);
                color: var(--ds-color-primary-600, #004f9f);
                font-size: var(--ds-body-md-font-size);
                line-height: var(--ds-body-md-line-height);
                text-decoration: none;
            "
        >
            <span>${label}</span>
            <span aria-hidden="true">→</span>
        </a>
    `;
}