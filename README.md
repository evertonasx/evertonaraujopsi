# Site profissional — Everton Araújo

Primeira versão do site profissional em Next.js, com CSS próprio e identidade visual editorial.

## O que já está implementado
- Página inicial com fotografia profissional enviada.
- Seções Sobre mim, TCC, modalidades de atendimento, dúvidas frequentes e contato.
- Links de agendamento, WhatsApp, Instagram, e-mail e Lattes.
- Layout responsivo para celular e computador.
- Títulos com degradê, faixa tipográfica animada, revelação de seções na rolagem e microinterações.
- Respeito à preferência de movimento reduzido do sistema.
- Paleta oficial: vinho `#8C1F47`, rosa `#D9B4C1`, ameixa `#732D53`, azul `#163A59` e cinza `#F2F2F2`.

## Antes de publicar
1. Confirmar se a logo oficial será enviada como PNG/SVG para substituir o monograma provisório “EA”.
2. Revisar os textos biográficos e as informações sobre atendimento.
3. Confirmar o endereço e os links.
4. Atualizar `metadataBase` em `app/layout.tsx` para a URL real da Vercel.

## Executar localmente
É necessário ter Node.js LTS instalado.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicar
O projeto pode ser enviado para um repositório GitHub e importado na Vercel. A Vercel detecta Next.js automaticamente.


Atualização de interface: formulário de contato por e-mail, animações de entrada, fio de rolagem e efeito de iluminação do cursor.
