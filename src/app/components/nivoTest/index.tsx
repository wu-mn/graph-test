// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/treemap
"use client"
import { ResponsiveTreeMap } from "@nivo/treemap"
import { useState } from "react"
import { nodeModuleNameResolver } from "typescript"

const data = {
  name: "",
  children: [
    { name: "最優良", loc: 11302 },
    { name: "優良候補", loc: 24593 },
    { name: "新規", loc: 2652 },
    { name: "顧客候補", loc: 3636 },
    { name: "優良", loc: 16703 },
    { name: "要注意", loc: 16703 },
    { name: "休眠傾向", loc: 6703 },
    { name: "過去最良", loc: 6703 },
    { name: "危険", loc: 6703 },
    { name: "休眠", loc: 6703 },
  ],
}

// const data = {
//   name: "TÍTULO III",
//   id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3",
//   text: "Da Organização do Estado",
//   legislationIdentifier: "urn:lex:br:federal:constituicao:1988-10-05;1988!tit1",
//   children: [
//     {
//       name: "CAPÍTULO I",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap1",
//       text: 'A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap1",
//       children: [
//         {
//           name: "Art. 18.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art18",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art18_cpt",
//               id: "",
//               text: 'A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art18_par1",
//               id: "",
//               text: "Brasília é a Capital Federal.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art18_par2",
//               id: "",
//               text: "Os Territórios Federais integram a União, e sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em lei complementar.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art18_par3",
//               id: "",
//               text: "Os Estados podem incorporar-se entre si, subdividir-se ou desmembrar-se para se anexarem a outros, ou formarem novos Estados ou Territórios Federais, mediante aprovação da população diretamente interessada, através de plebiscito, e do Congresso Nacional, por lei complementar.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 4º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art18_par4",
//               id: "",
//               text: "A criação, a incorporação, a fusão e o desmembramento de Municípios preservarão a continuidade e a unidade histórico-cultural do ambiente urbano, far-se-ão por lei estadual, obedecidos os requisitos previstos em lei complementar estadual, e dependerão de consulta prévia, mediante plebiscito, às populações diretamente interessadas.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 19.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art19",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art19_cpt",
//               id: "",
//               text: "É vedado à União, aos Estados, ao Distrito Federal e aos Municípios:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art19_cpt_inc1",
//                   id: "",
//                   text: "estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles ou seus representantes relações de dependência ou aliança, ressalvada, na forma da lei, a colaboração de interesse público;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art19_cpt_inc2",
//                   id: "",
//                   text: "recusar fé aos documentos públicos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art19_cpt_inc3",
//                   id: "",
//                   text: "criar distinções entre brasileiros ou preferências entre si.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO II",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap2",
//       text: "São bens da União:",
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap2",
//       children: [
//         {
//           name: "Art. 20.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art20",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt",
//               id: "",
//               text: "São bens da União:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc1",
//                   id: "",
//                   text: "os que atualmente lhe pertencem e os que lhe vierem a ser atribuídos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc2",
//                   id: "",
//                   text: "as terras devolutas indispensáveis à defesa das fronteiras, das fortificações e construções militares, das vias federais de comunicação e à preservação ambiental, definidas em lei;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc3",
//                   id: "",
//                   text: "os lagos, rios e quaisquer correntes de água em terrenos de seu domínio, ou que banhem mais de um Estado, sirvam de limites com outros países, ou se estendam a território estrangeiro ou dele provenham, bem como os terrenos marginais e as praias fluviais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc4",
//                   id: "",
//                   text: 'as ilhas fluviais e lacustres nas zonas limítrofes com outros países; as praias marítimas; as ilhas oceânicas e as costeiras, excluídas, destas, as áreas referidas no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt_inc2">art. 26, II</span>;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc5",
//                   id: "",
//                   text: "os recursos naturais da plataforma continental e da zona econômica exclusiva;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc6",
//                   id: "",
//                   text: "o mar territorial;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc7",
//                   id: "",
//                   text: "os terrenos de marinha e seus acrescidos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc8",
//                   id: "",
//                   text: "os potenciais de energia hidráulica;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc9",
//                   id: "",
//                   text: "os recursos minerais, inclusive os do subsolo;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc10",
//                   id: "",
//                   text: "as cavidades naturais subterrâneas e os sítios arqueológicos e pré-históricos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_cpt_inc11",
//                   id: "",
//                   text: "as terras tradicionalmente ocupadas pelos índios.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_par1",
//               id: "",
//               text: "É assegurada, nos termos da lei, aos Estados, ao Distrito Federal e aos Municípios, bem como a órgãos da administração direta da União, participação no resultado da exploração de petróleo ou gás natural, de recursos hídricos para fins de geração de energia elétrica e de outros recursos minerais no respectivo território, plataforma continental, mar territorial ou zona econômica exclusiva, ou compensação financeira por essa exploração.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art20_par2",
//               id: "",
//               text: "A faixa de até cento e cinqüenta quilômetros de largura, ao longo das fronteiras terrestres, designada como faixa de fronteira, é considerada fundamental para defesa do território nacional, e sua ocupação e utilização serão reguladas em lei.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 21.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art21",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt",
//               id: "",
//               text: "Compete à União:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc1",
//                   id: "",
//                   text: "manter relações com Estados estrangeiros e participar de organizações internacionais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc2",
//                   id: "",
//                   text: "declarar a guerra e celebrar a paz;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc3",
//                   id: "",
//                   text: "assegurar a defesa nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc4",
//                   id: "",
//                   text: "permitir, nos casos previstos em lei complementar, que forças estrangeiras transitem pelo território nacional ou nele permaneçam temporariamente;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc5",
//                   id: "",
//                   text: "decretar o estado de sítio, o estado de defesa e a intervenção federal;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc6",
//                   id: "",
//                   text: "autorizar e fiscalizar a produção e o comércio de material bélico;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc7",
//                   id: "",
//                   text: "emitir moeda;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc8",
//                   id: "",
//                   text: "administrar as reservas cambiais do País e fiscalizar as operações de natureza financeira, especialmente as de crédito, câmbio e capitalização, bem como as de seguros e de previdência privada;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc9",
//                   id: "",
//                   text: "elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc10",
//                   id: "",
//                   text: "manter o serviço postal e o correio aéreo nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc11",
//                   id: "",
//                   text: "explorar, diretamente ou mediante concessão a empresas sob controle acionário estatal, os serviços telefônicos, telegráficos, de transmissão de dados e demais serviços públicos de telecomunicações, assegurada a prestação de serviços de informações por entidades de direito privado através da rede pública de telecomunicações explorada pela União;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12",
//                   id: "",
//                   text: "explorar, diretamente ou mediante autorização, concessão ou permissão:",
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali1",
//                       id: "",
//                       text: "os serviços de radiodifusão sonora, de sons e imagens e demais serviços de telecomunicações;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali2",
//                       id: "",
//                       text: "os serviços e instalações de energia elétrica e o aproveitamento energético dos cursos de água, em articulação com os Estados onde se situam os potenciais hidroenergéticos;",
//                       loc: 1,
//                     },
//                     {
//                       name: "c)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali3",
//                       id: "",
//                       text: "a navegação aérea, aeroespacial e a infra-estrutura aeroportuária;",
//                       loc: 1,
//                     },
//                     {
//                       name: "d)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali4",
//                       id: "",
//                       text: "os serviços de transporte ferroviário e aquaviário entre portos brasileiros e fronteiras nacionais, ou que transponham os limites de Estado ou Território;",
//                       loc: 1,
//                     },
//                     {
//                       name: "e)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali5",
//                       id: "",
//                       text: "os serviços de transporte rodoviário interestadual e internacional de passageiros;",
//                       loc: 1,
//                     },
//                     {
//                       name: "f)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc12_ali6",
//                       id: "",
//                       text: "os portos marítimos, fluviais e lacustres;",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc13",
//                   id: "",
//                   text: "organizar e manter o Poder Judiciário, o Ministério Público e a Defensoria Pública do Distrito Federal e dos Territórios;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc14",
//                   id: "",
//                   text: "organizar e manter a polícia federal, a polícia rodoviária e a ferroviária federais, bem como a polícia civil, a polícia militar e o corpo de bombeiros militar do Distrito Federal e dos Territórios;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc15",
//                   id: "",
//                   text: "organizar e manter os serviços oficiais de estatística, geografia, geologia e cartografia de âmbito nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc16",
//                   id: "",
//                   text: "exercer a classificação, para efeito indicativo, de diversões públicas e de programas de rádio e televisão;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc17",
//                   id: "",
//                   text: "conceder anistia;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc18",
//                   id: "",
//                   text: "planejar e promover a defesa permanente contra as calamidades públicas, especialmente as secas e as inundações;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc19",
//                   id: "",
//                   text: "instituir sistema nacional de gerenciamento de recursos hídricos e definir critérios de outorga de direitos de seu uso;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc20",
//                   id: "",
//                   text: "instituir diretrizes para o desenvolvimento urbano, inclusive habitação, saneamento básico e transportes urbanos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc21",
//                   id: "",
//                   text: "estabelecer princípios e diretrizes para o sistema nacional de viação;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc22",
//                   id: "",
//                   text: "executar os serviços de polícia marítima, aérea e de fronteira;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc23",
//                   id: "",
//                   text: "explorar os serviços e instalações nucleares de qualquer natureza e exercer monopólio estatal sobre a pesquisa, a lavra, o enriquecimento e reprocessamento, a industrialização e o comércio de minérios nucleares e seus derivados, atendidos os seguintes princípios e condições:",
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc23_ali1",
//                       id: "",
//                       text: "toda atividade nuclear em território nacional somente será admitida para fins pacíficos e mediante aprovação do Congresso Nacional;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc23_ali2",
//                       id: "",
//                       text: "sob regime de concessão ou permissão, é autorizada a utilização de radioisótopos para a pesquisa e usos medicinais, agrícolas, industriais e atividades análogas;",
//                       loc: 1,
//                     },
//                     {
//                       name: "c)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc23_ali3",
//                       id: "",
//                       text: "a responsabilidade civil por danos nucleares independe da existência de culpa;",
//                       loc: 1,
//                     },
//                     {
//                       name: "d)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc23_ali4,emc-49-2006-02-08",
//                       id: "",
//                       text: "a responsabilidade civil por danos nucleares independe da existência de culpa;",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXIV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc24",
//                   id: "",
//                   text: "organizar, manter e executar a inspeção do trabalho;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc25",
//                   id: "",
//                   text: "estabelecer as áreas e as condições para o exercício da atividade de garimpagem, em forma associativa.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXVI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art21_cpt_inc26,emc-115-2022-02-10",
//                   id: "",
//                   text: "organizar e fiscalizar a proteção e o tratamento de dados pessoais, nos termos da lei.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 22.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art22",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt",
//               id: "",
//               text: "Compete privativamente à União legislar sobre:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc1",
//                   id: "",
//                   text: "direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc2",
//                   id: "",
//                   text: "desapropriação;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc3",
//                   id: "",
//                   text: "requisições civis e militares, em caso de iminente perigo e em tempo de guerra;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc4",
//                   id: "",
//                   text: "águas, energia, informática, telecomunicações e radiodifusão;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc5",
//                   id: "",
//                   text: "serviço postal;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc6",
//                   id: "",
//                   text: "sistema monetário e de medidas, títulos e garantias dos metais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc7",
//                   id: "",
//                   text: "política de crédito, câmbio, seguros e transferência de valores;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc8",
//                   id: "",
//                   text: "comércio exterior e interestadual;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc9",
//                   id: "",
//                   text: "diretrizes da política nacional de transportes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc10",
//                   id: "",
//                   text: "regime dos portos, navegação lacustre, fluvial, marítima, aérea e aeroespacial;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc11",
//                   id: "",
//                   text: "trânsito e transporte;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc12",
//                   id: "",
//                   text: "jazidas, minas, outros recursos minerais e metalurgia;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc13",
//                   id: "",
//                   text: "nacionalidade, cidadania e naturalização;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc14",
//                   id: "",
//                   text: "populações indígenas;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc15",
//                   id: "",
//                   text: "emigração e imigração, entrada, extradição e expulsão de estrangeiros;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc16",
//                   id: "",
//                   text: "organização do sistema nacional de emprego e condições para o exercício de profissões;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc17",
//                   id: "",
//                   text: "organização judiciária, do Ministério Público e da Defensoria Pública do Distrito Federal e dos Territórios, bem como organização administrativa destes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc18",
//                   id: "",
//                   text: "sistema estatístico, sistema cartográfico e de geologia nacionais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc19",
//                   id: "",
//                   text: "sistemas de poupança, captação e garantia da poupança popular;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc20",
//                   id: "",
//                   text: "sistemas de consórcios e sorteios;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc21",
//                   id: "",
//                   text: "normas gerais de organização, efetivos, material bélico, garantias, convocação e mobilização das polícias militares e corpos de bombeiros militares;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc22",
//                   id: "",
//                   text: "competência da polícia federal e das polícias rodoviária e ferroviária federais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc23",
//                   id: "",
//                   text: "seguridade social;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXIV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc24",
//                   id: "",
//                   text: "diretrizes e bases da educação nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc25",
//                   id: "",
//                   text: "registros públicos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXVI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc26",
//                   id: "",
//                   text: "atividades nucleares de qualquer natureza;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXVII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc27",
//                   id: "",
//                   text: "normas gerais de licitação e contratação, em todas as modalidades, para a administração pública, direta e indireta, incluídas as fundações instituídas e mantidas pelo poder público, nas diversas esferas de governo, e empresas sob seu controle;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXVIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc28",
//                   id: "",
//                   text: "defesa territorial, defesa aeroespacial, defesa marítima, defesa civil e mobilização nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXIX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc29",
//                   id: "",
//                   text: "propaganda comercial.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XXX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_cpt_inc30,emc-115-2022-02-10",
//                   id: "",
//                   text: "proteção e tratamento de dados pessoais.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "Parágrafo único.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art22_par1u",
//               id: "",
//               text: 'Lei complementar poderá autorizar os Estados a legislar sobre questões específicas das matérias relacionadas <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art24">neste artigo</span>.',
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 23.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art23",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt",
//               id: "",
//               text: "É competência comum da União, dos Estados, do Distrito Federal e dos Municípios:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc1",
//                   id: "",
//                   text: 'zelar pela guarda da <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> , das leis e das instituições democráticas e conservar o patrimônio público;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc2",
//                   id: "",
//                   text: "cuidar da saúde e assistência pública, da proteção e garantia das pessoas portadoras de deficiência;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc3",
//                   id: "",
//                   text: "proteger os documentos, as obras e outros bens de valor histórico, artístico e cultural, os monumentos, as paisagens naturais notáveis e os sítios arqueológicos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc4",
//                   id: "",
//                   text: "impedir a evasão, a destruição e a descaracterização de obras de arte e de outros bens de valor histórico, artístico ou cultural;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc5",
//                   id: "",
//                   text: "proporcionar os meios de acesso à cultura, à educação e à ciência;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc6",
//                   id: "",
//                   text: "proteger o meio ambiente e combater a poluição em qualquer de suas formas;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc7",
//                   id: "",
//                   text: "preservar as florestas, a fauna e a flora;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc8",
//                   id: "",
//                   text: "fomentar a produção agropecuária e organizar o abastecimento alimentar;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc9",
//                   id: "",
//                   text: "promover programas de construção de moradias e a melhoria das condições habitacionais e de saneamento básico;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc10",
//                   id: "",
//                   text: "combater as causas da pobreza e os fatores de marginalização, promovendo a integração social dos setores desfavorecidos;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc11",
//                   id: "",
//                   text: "registrar, acompanhar e fiscalizar as concessões de direitos de pesquisa e exploração de recursos hídricos e minerais em seus territórios;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_cpt_inc12",
//                   id: "",
//                   text: "estabelecer e implantar política de educação para a segurança do trânsito.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "Parágrafo único.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art23_par1u",
//               id: "",
//               text: "Lei complementar fixará normas para a cooperação entre a União e os Estados, o Distrito Federal e os Municípios, tendo em vista o equilíbrio do desenvolvimento e do bem-estar em âmbito nacional.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 24.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art24",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt",
//               id: "",
//               text: "Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc1",
//                   id: "",
//                   text: "direito tributário, financeiro, penitenciário, econômico e urbanístico;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc2",
//                   id: "",
//                   text: "orçamento;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc3",
//                   id: "",
//                   text: "juntas comerciais;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc4",
//                   id: "",
//                   text: "custas dos serviços forenses;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc5",
//                   id: "",
//                   text: "produção e consumo;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc6",
//                   id: "",
//                   text: "florestas, caça, pesca, fauna, conservação da natureza, defesa do solo e dos recursos naturais, proteção do meio ambiente e controle da poluição;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc7",
//                   id: "",
//                   text: "proteção ao patrimônio histórico, cultural, artístico, turístico e paisagístico;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc8",
//                   id: "",
//                   text: "responsabilidade por dano ao meio ambiente, ao consumidor, a bens e direitos de valor artístico, estético, histórico, turístico e paisagístico;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc9",
//                   id: "",
//                   text: "educação, cultura, ensino e desporto;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc10",
//                   id: "",
//                   text: "criação, funcionamento e processo do juizado de pequenas causas;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc11",
//                   id: "",
//                   text: "procedimentos em matéria processual;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc12",
//                   id: "",
//                   text: "previdência social, proteção e defesa da saúde;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc13",
//                   id: "",
//                   text: "assistência jurídica e defensoria pública;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XIV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc14",
//                   id: "",
//                   text: "proteção e integração social das pessoas portadoras de deficiência;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc15",
//                   id: "",
//                   text: "proteção à infância e à juventude;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XVI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_cpt_inc16",
//                   id: "",
//                   text: "organização, garantias, direitos e deveres das polícias civis.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_par1",
//               id: "",
//               text: "No âmbito da legislação concorrente, a competência da União limitar-se-á a estabelecer normas gerais.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_par2",
//               id: "",
//               text: "A competência da União para legislar sobre normas gerais não exclui a competência suplementar dos Estados.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_par3",
//               id: "",
//               text: "Inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena, para atender a suas peculiaridades.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 4º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art24_par4",
//               id: "",
//               text: "A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO III",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap3",
//       text: 'Os Estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap3",
//       children: [
//         {
//           name: "Art. 25.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art25",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art25_cpt",
//               id: "",
//               text: 'Os Estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art25_par1",
//               id: "",
//               text: 'São reservadas aos Estados as competências que não lhes sejam vedadas por esta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art25_par2",
//               id: "",
//               text: "Cabe aos Estados explorar diretamente, ou mediante concessão a empresa estatal, com exclusividade de distribuição, os serviços locais de gás canalizado.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art25_par3",
//               id: "",
//               text: "Os Estados poderão, mediante lei complementar, instituir regiões metropolitanas, aglomerações urbanas e microrregiões, constituídas por agrupamentos de Municípios limítrofes, para integrar a organização, o planejamento e a execução de funções públicas de interesse comum.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 26.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art26",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt",
//               id: "",
//               text: "Incluem-se entre os bens dos Estados:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt_inc1",
//                   id: "",
//                   text: "as águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas, neste caso, na forma da lei, as decorrentes de obras da União;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt_inc2",
//                   id: "",
//                   text: "as áreas, nas ilhas oceânicas e costeiras, que estiverem no seu domínio, excluídas aquelas sob domínio da União, Municípios ou terceiros;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt_inc3",
//                   id: "",
//                   text: "as ilhas fluviais e lacustres não pertencentes à União;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art26_cpt_inc4",
//                   id: "",
//                   text: "as terras devolutas não compreendidas entre as da União.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 27.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art27",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art27_cpt",
//               id: "",
//               text: "O número de Deputados à Assembléia Legislativa corresponderá ao triplo da representação do Estado na Câmara dos Deputados e, atingido o número de trinta e seis, será acrescido de tantos quantos forem os Deputados Federais acima de doze.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art27_par1",
//               id: "",
//               text: 'Será de quatro anos o mandato dos Deputados Estaduais, aplicando-se-lhes as regras desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> sobre sistema eleitoral, inviolabilidade, imunidades, remuneração, perda de mandato, licença, impedimentos e incorporação às Forças Armadas.',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art27_par2",
//               id: "",
//               text: 'A remuneração dos Deputados Estaduais será fixada em cada legislatura, para a subseqüente, pela Assembléia Legislativa, observado o que dispõem os <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art150_cpt_inc2">arts. 150, II</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_cpt_inc3">153, III</span>, e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_par2_inc1">153, § 2º, I</span>.',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art27_par3",
//               id: "",
//               text: "Compete às Assembléias Legislativas dispor sobre seu regimento interno , polícia e serviços administrativos de sua secretaria, e prover os respectivos cargos.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 4º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art27_par4",
//               id: "",
//               text: "A lei disporá sobre a iniciativa popular no processo legislativo estadual.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 28.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art28",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art28_cpt",
//               id: "",
//               text: 'A eleição do Governador e do Vice-Governador de Estado, para mandato de quatro anos, realizar-se-á noventa dias antes do término do mandato de seus antecessores, e a posse ocorrerá no dia 1º de janeiro do ano subseqüente, observado, quanto ao mais, o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art77">art. 77</span>.',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "Parágrafo único.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art28_par1u",
//               id: "",
//               text: 'Perderá o mandato o Governador que assumir outro cargo ou função na administração pública direta ou indireta, ressalvada a posse em virtude de concurso público e observado o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc1">art. 38, I</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc4">IV</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc5">V</span>.',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art28_par2,emc-19-1998-06-04",
//               id: "",
//               text: "Os subsídios do Governador, do Vice-Governador e dos Secretários de Estado serão fixados por lei de iniciativa da Assembléia Legislativa, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO IV",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap4",
//       text: 'O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará, atendidos os princípios estabelecidos nesta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> , na <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> do respectivo Estado e os seguintes preceitos:',
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap4",
//       children: [
//         {
//           name: "Art. 29.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art29",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt",
//               id: "",
//               text: 'O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará, atendidos os princípios estabelecidos nesta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> , na <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> do respectivo Estado e os seguintes preceitos:',
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc1",
//                   id: "",
//                   text: "eleição do Prefeito, do Vice-Prefeito e dos Vereadores, para mandato de quatro anos, mediante pleito direto e simultâneo realizado em todo o País;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc2",
//                   id: "",
//                   text: 'eleição do Prefeito e do Vice-Prefeito até noventa dias antes do término do mandato dos que devam suceder, aplicadas as regras do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art77">art. 77</span> no caso de Municípios com mais de duzentos mil eleitores;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc3",
//                   id: "",
//                   text: "posse do Prefeito e do Vice-Prefeito no dia 1º de janeiro do ano subseqüente ao da eleição;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4",
//                   id: "",
//                   text: "número de Vereadores proporcional à população do Município, observados os seguintes limites:",
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali1",
//                       id: "",
//                       text: "mínimo de nove e máximo de vinte e um nos Municípios de até um milhão de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali2",
//                       id: "",
//                       text: "mínimo de trinta e três e máximo de quarenta e um nos Municípios de mais de um milhão e menos de cinco milhões de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "c)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali3",
//                       id: "",
//                       text: "mínimo de quarenta e dois e máximo de cinqüenta e cinco nos Municípios de mais de cinco milhões de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "d)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali4,emc-58-2009-09-23",
//                       id: "",
//                       text: "15 (quinze) Vereadores, nos Municípios de mais de 50.000 (cinquenta mil) habitantes e de até 80.000 (oitenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "e)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali5,emc-58-2009-09-23",
//                       id: "",
//                       text: "17 (dezessete) Vereadores, nos Municípios de mais de 80.000 (oitenta mil) habitantes e de até 120.000 (cento e vinte mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "f)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali6,emc-58-2009-09-23",
//                       id: "",
//                       text: "19 (dezenove) Vereadores, nos Municípios de mais de 120.000 (cento e vinte mil) habitantes e de até 160.000 (cento e sessenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "g)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali7,emc-58-2009-09-23",
//                       id: "",
//                       text: "21 (vinte e um) Vereadores, nos Municípios de mais de 160.000 (cento e sessenta mil) habitantes e de até 300.000 (trezentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "h)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali8,emc-58-2009-09-23",
//                       id: "",
//                       text: "23 (vinte e três) Vereadores, nos Municípios de mais de 300.000 (trezentos mil) habitantes e de até 450.000 (quatrocentos e cinquenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "i)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali9,emc-58-2009-09-23",
//                       id: "",
//                       text: "25 (vinte e cinco) Vereadores, nos Municípios de mais de 450.000 (quatrocentos e cinquenta mil) habitantes e de até 600.000 (seiscentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "j)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali10,emc-58-2009-09-23",
//                       id: "",
//                       text: "27 (vinte e sete) Vereadores, nos Municípios de mais de 600.000 (seiscentos mil) habitantes e de até 750.000 (setecentos e cinquenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "k)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali11,emc-58-2009-09-23",
//                       id: "",
//                       text: "29 (vinte e nove) Vereadores, nos Municípios de mais de 750.000 (setecentos e cinquenta mil) habitantes e de até 900.000 (novecentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "l)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali12,emc-58-2009-09-23",
//                       id: "",
//                       text: "31 (trinta e um) Vereadores, nos Municípios de mais de 900.000 (novecentos mil) habitantes e de até 1.050.000 (um milhão e cinquenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "m)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali13,emc-58-2009-09-23",
//                       id: "",
//                       text: "33 (trinta e três) Vereadores, nos Municípios de mais de 1.050.000 (um milhão e cinquenta mil) habitantes e de até 1.200.000 (um milhão e duzentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "n)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali14,emc-58-2009-09-23",
//                       id: "",
//                       text: "35 (trinta e cinco) Vereadores, nos Municípios de mais de 1.200.000 (um milhão e duzentos mil) habitantes e de até 1.350.000 (um milhão e trezentos e cinquenta mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "o)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali15,emc-58-2009-09-23",
//                       id: "",
//                       text: "37 (trinta e sete) Vereadores, nos Municípios de 1.350.000 (um milhão e trezentos e cinquenta mil) habitantes e de até 1.500.000 (um milhão e quinhentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "p)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali16,emc-58-2009-09-23",
//                       id: "",
//                       text: "39 (trinta e nove) Vereadores, nos Municípios de mais de 1.500.000 (um milhão e quinhentos mil) habitantes e de até 1.800.000 (um milhão e oitocentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "q)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali17,emc-58-2009-09-23",
//                       id: "",
//                       text: "41 (quarenta e um) Vereadores, nos Municípios de mais de 1.800.000 (um milhão e oitocentos mil) habitantes e de até 2.400.000 (dois milhões e quatrocentos mil) habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "r)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali18,emc-58-2009-09-23",
//                       id: "",
//                       text: "43 (quarenta e três) Vereadores, nos Municípios de mais de 2.400.000 (dois milhões e quatrocentos mil) habitantes e de até 3.000.000 (três milhões) de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "s)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali19,emc-58-2009-09-23",
//                       id: "",
//                       text: "45 (quarenta e cinco) Vereadores, nos Municípios de mais de 3.000.000 (três milhões) de habitantes e de até 4.000.000 (quatro milhões) de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "t)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali20,emc-58-2009-09-23",
//                       id: "",
//                       text: "47 (quarenta e sete) Vereadores, nos Municípios de mais de 4.000.000 (quatro milhões) de habitantes e de até 5.000.000 (cinco milhões) de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "u)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali21,emc-58-2009-09-23",
//                       id: "",
//                       text: "49 (quarenta e nove) Vereadores, nos Municípios de mais de 5.000.000 (cinco milhões) de habitantes e de até 6.000.000 (seis milhões) de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "v)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali22,emc-58-2009-09-23",
//                       id: "",
//                       text: "51 (cinquenta e um) Vereadores, nos Municípios de mais de 6.000.000 (seis milhões) de habitantes e de até 7.000.000 (sete milhões) de habitantes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "w)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali23,emc-58-2009-09-23",
//                       id: "",
//                       text: "53 (cinquenta e três) Vereadores, nos Municípios de mais de 7.000.000 (sete milhões) de habitantes e de até 8.000.000 (oito milhões) de habitantes; e",
//                       loc: 1,
//                     },
//                     {
//                       name: "x)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc4_ali24,emc-58-2009-09-23",
//                       id: "",
//                       text: "55 (cinquenta e cinco) Vereadores, nos Municípios de mais de 8.000.000 (oito milhões) de habitantes;",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc5",
//                   id: "",
//                   text: 'remuneração do Prefeito, do Vice-Prefeito e dos Vereadores fixada pela Câmara Municipal em cada legislatura, para a subseqüente, observado o que dispõem os arts. <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc11">37, XI</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art150_cpt_inc2">150, II</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_cpt_inc3">153, III</span>, e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_par2_inc1">153, § 2º, I</span>;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6,emc-1-1992-03-31",
//                   id: "",
//                   text: 'a remuneração dos Vereadores corresponderá a, no máximo, setenta e cinco por cento daquela estabelecida, em espécie, para os Deputados Estaduais, ressalvado o que dispõe o <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc11">art. 37, XI</span>;',
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali1,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de até dez mil habitantes, o subsídio máximo dos Vereadores corresponderá a vinte por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali2,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de dez mil e um a cinqüenta mil habitantes, o subsídio máximo dos Vereadores corresponderá a trinta por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                     {
//                       name: "c)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali3,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de cinqüenta mil e um a cem mil habitantes, o subsídio máximo dos Vereadores corresponderá a quarenta por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                     {
//                       name: "d)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali4,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de cem mil e um a trezentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a cinqüenta por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                     {
//                       name: "e)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali5,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de trezentos mil e um a quinhentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a sessenta por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                     {
//                       name: "f)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6_ali6,emc-25-2000-02-14",
//                       id: "",
//                       text: "em Municípios de mais de quinhentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a setenta e cinco por cento do subsídio dos Deputados Estaduais;",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc7,emc-1-1992-03-31",
//                   id: "",
//                   text: "o total da despesa com a remuneração dos Vereadores não poderá ultrapassar o montante de cinco por cento da receita do Município.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc6",
//                   id: "",
//                   text: "inviolabilidade dos Vereadores por suas opiniões, palavras e votos no exercício do mandato e na circunscrição do Município;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc7",
//                   id: "",
//                   text: 'proibições e incompatibilidades, no exercício da vereança, similares, no que couber, ao disposto nesta <span xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> para os membros do Congresso Nacional e na Constituição do respectivo Estado para os membros da Assembléia Legislativa;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc8",
//                   id: "",
//                   text: "julgamento do Prefeito perante o Tribunal de Justiça;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc9",
//                   id: "",
//                   text: "organização das funções legislativas e fiscalizadoras da Câmara Municipal;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "X –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc10",
//                   id: "",
//                   text: "cooperação das associações representativas no planejamento municipal;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc11",
//                   id: "",
//                   text: "iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, através de manifestação de, pelo menos, cinco por cento do eleitorado;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "XII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29_cpt_inc12",
//                   id: "",
//                   text: 'perda do mandato do Prefeito, nos termos do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art28_par1u">art. 28, parágrafo único</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 29-A.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1,emc-25-2000-02-14",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt,emc-25-2000-02-14",
//               id: "",
//               text: "O total da despesa do Poder Legislativo Municipal, incluídos os subsídios dos Vereadores e excluídos os gastos com inativos, não poderá ultrapassar os seguintes percentuais, relativos ao somatório da receita tributária e das transferências previstas no § 5º do art. 153 e nos arts. 158 e 159, efetivamente realizado no exercício anterior:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc1,emc-25-2000-02-14",
//                   id: "",
//                   text: "oito por cento para Municípios com população de até cem mil habitantes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc2,emc-25-2000-02-14",
//                   id: "",
//                   text: "sete por cento para Municípios com população entre cem mil e um e trezentos mil habitantes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc3,emc-25-2000-02-14",
//                   id: "",
//                   text: "seis por cento para Municípios com população entre trezentos mil e um e quinhentos mil habitantes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc4,emc-25-2000-02-14",
//                   id: "",
//                   text: "cinco por cento para Municípios com população acima de quinhentos mil habitantes.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc5,emc-58-2009-09-23",
//                   id: "",
//                   text: "4% (quatro por cento) para Municípios com população entre 3.000.001 (três milhões e um) e 8.000.000 (oito milhões) de habitantes;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_cpt_inc6,emc-58-2009-09-23",
//                   id: "",
//                   text: "3,5% (três inteiros e cinco décimos por cento) para Municípios com população acima de 8.000.001 (oito milhões e um) habitantes.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par1,emc-25-2000-02-14",
//               id: "",
//               text: "A Câmara Municipal não gastará mais de setenta por cento de sua receita com folha de pagamento, incluído o gasto com o subsídio de seus Vereadores.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par2,emc-25-2000-02-14",
//               id: "",
//               text: "Constitui crime de responsabilidade do Prefeito Municipal:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par2_inc1,emc-25-2000-02-14",
//                   id: "",
//                   text: "efetuar repasse que supere os limites definidos neste artigo;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par2_inc2,emc-25-2000-02-14",
//                   id: "",
//                   text: "não enviar o repasse até o dia vinte de cada mês; ou",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par2_inc3,emc-25-2000-02-14",
//                   id: "",
//                   text: "enviá-lo a menor em relação à proporção fixada na Lei Orçamentária.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art29-1_par3,emc-25-2000-02-14",
//               id: "",
//               text: "Constitui crime de responsabilidade do Presidente da Câmara Municipal o desrespeito ao § 1º deste artigo.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 30.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art30",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt",
//               id: "",
//               text: "Compete aos Municípios:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc1",
//                   id: "",
//                   text: "legislar sobre assuntos de interesse local;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc2",
//                   id: "",
//                   text: "suplementar a legislação federal e a estadual no que couber;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc3",
//                   id: "",
//                   text: "instituir e arrecadar os tributos de sua competência, bem como aplicar suas rendas, sem prejuízo da obrigatoriedade de prestar contas e publicar balancetes nos prazos fixados em lei;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc4",
//                   id: "",
//                   text: "criar, organizar e suprimir Distritos, observada a legislação estadual;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc5",
//                   id: "",
//                   text: "organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc6",
//                   id: "",
//                   text: "manter, com a cooperação técnica e financeira da União e do Estado, programas de educação pré-escolar e de ensino fundamental;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc7",
//                   id: "",
//                   text: "prestar, com a cooperação técnica e financeira da União e do Estado, serviços de atendimento à saúde da população;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VIII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc8",
//                   id: "",
//                   text: "promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do solo urbano;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IX –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art30_cpt_inc9",
//                   id: "",
//                   text: "promover a proteção do patrimônio histórico-cultural local, observada a legislação e a ação fiscalizadora federal e estadual.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 31.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art31",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art31_cpt",
//               id: "",
//               text: "A fiscalização do Município será exercida pelo Poder Legislativo municipal, mediante controle externo, e pelos sistemas de controle interno do Poder Executivo municipal, na forma da lei.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art31_par1",
//               id: "",
//               text: "O controle externo da Câmara Municipal será exercido com o auxílio dos Tribunais de Contas dos Estados ou do Município ou dos Conselhos ou Tribunais de Contas dos Municípios, onde houver.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art31_par2",
//               id: "",
//               text: "O parecer prévio, emitido pelo órgão competente, sobre as contas que o Prefeito deve anualmente prestar, só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art31_par3",
//               id: "",
//               text: "As contas dos Municípios ficarão, durante sessenta dias, anualmente, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade, nos termos da lei.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 4º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art31_par4",
//               id: "",
//               text: "É vedada a criação de tribunais, Conselhos ou órgãos de contas municipais.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO V",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap5",
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap5",
//       children: [
//         {
//           name: "Seção I",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap5_sec1",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 32.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art32",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art32_cpt",
//                   id: "",
//                   text: 'O Distrito Federal, vedada sua divisão em Municípios, reger-se-á por lei orgânica, votada em dois turnos com interstício mínimo de dez dias, e aprovada por dois terços da Câmara Legislativa, que a promulgará, atendidos os princípios estabelecidos nesta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> .',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art32_par1",
//                   id: "",
//                   text: "Ao Distrito Federal são atribuídas as competências legislativas reservadas aos Estados e Municípios.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art32_par2",
//                   id: "",
//                   text: 'A eleição do Governador e do Vice-Governador, observadas as regras do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art77">art. 77</span>, e dos Deputados Distritais coincidirá com a dos Governadores e Deputados Estaduais, para mandato de igual duração.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art32_par3",
//                   id: "",
//                   text: 'Aos Deputados Distritais e à Câmara Legislativa aplica-se o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art27">art. 27</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art32_par4",
//                   id: "",
//                   text: "Lei federal disporá sobre a utilização, pelo Governo do Distrito Federal, das polícias civil e militar e do corpo de bombeiros militar.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Seção II",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap5_sec2",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 33.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art33",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art33_cpt",
//                   id: "",
//                   text: "A lei disporá sobre a organização administrativa e judiciária dos Territórios.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art33_par1",
//                   id: "",
//                   text: 'Os Territórios poderão ser divididos em Municípios, aos quais se aplicará, no que couber, o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap4">Capítulo IV deste Título</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art33_par2",
//                   id: "",
//                   text: "As contas do Governo do Território serão submetidas ao Congresso Nacional, com parecer prévio do Tribunal de Contas da União.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art33_par3",
//                   id: "",
//                   text: 'Nos Territórios Federais com mais de cem mil habitantes, além do Governador, nomeado na forma desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> , haverá órgãos judiciários de primeira e segunda instâncias, membros do Ministério Público e defensores públicos federais; a lei disporá sobre as eleições para a Câmara Territorial e sua competência deliberativa.',
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO VI",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap6",
//       text: "A União não intervirá nos Estados nem no Distrito Federal, exceto para:",
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap6",
//       children: [
//         {
//           name: "Art. 34.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art34",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt",
//               id: "",
//               text: "A União não intervirá nos Estados nem no Distrito Federal, exceto para:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc1",
//                   id: "",
//                   text: "manter a integridade nacional;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc2",
//                   id: "",
//                   text: "repelir invasão estrangeira ou de uma unidade da Federação em outra;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc3",
//                   id: "",
//                   text: "pôr termo a grave comprometimento da ordem pública;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc4",
//                   id: "",
//                   text: "garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "V –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc5",
//                   id: "",
//                   text: "reorganizar as finanças da unidade da Federação que:",
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc5_ali1",
//                       id: "",
//                       text: "suspender o pagamento da dívida fundada por mais de dois anos consecutivos, salvo motivo de força maior;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc5_ali2",
//                       id: "",
//                       text: 'deixar de entregar aos Municípios receitas tributárias fixadas nesta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span> dentro dos prazos estabelecidos em lei;',
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "VI –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc6",
//                   id: "",
//                   text: "prover a execução de lei federal, ordem ou decisão judicial;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "VII –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7",
//                   id: "",
//                   text: "assegurar a observância dos seguintes princípios constitucionais:",
//                   children: [
//                     {
//                       name: "a)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7_ali1",
//                       id: "",
//                       text: "forma republicana, sistema representativo e regime democrático;",
//                       loc: 1,
//                     },
//                     {
//                       name: "b)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7_ali2",
//                       id: "",
//                       text: "direitos da pessoa humana;",
//                       loc: 1,
//                     },
//                     {
//                       name: "c)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7_ali3",
//                       id: "",
//                       text: "autonomia municipal;",
//                       loc: 1,
//                     },
//                     {
//                       name: "d)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7_ali4",
//                       id: "",
//                       text: "prestação de contas da administração pública, direta e indireta.",
//                       loc: 1,
//                     },
//                     {
//                       name: "e)",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7_ali5,emc-14-1996-09-12",
//                       id: "",
//                       text: "aplicação do mínimo exigido da receita resultante de impostos estaduais, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 35.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art35",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt",
//               id: "",
//               text: "O Estado não intervirá em seus Municípios, nem a União nos Municípios localizados em Território Federal, exceto quando:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt_inc1",
//                   id: "",
//                   text: "deixar de ser paga, sem motivo de força maior, por dois anos consecutivos, a dívida fundada;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt_inc2",
//                   id: "",
//                   text: "não forem prestadas contas devidas, na forma da lei;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt_inc3",
//                   id: "",
//                   text: "não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt_inc4",
//                   id: "",
//                   text: "o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios indicados na Constituição estadual, ou para prover a execução de lei, de ordem ou de decisão judicial.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Art. 36.",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!art36",
//           id: "",
//           paragraphs: [
//             {
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_cpt",
//               id: "",
//               text: "A decretação da intervenção dependerá:",
//               children: [
//                 {
//                   name: "I –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_cpt_inc1",
//                   id: "",
//                   text: 'no caso do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc4">art. 34, IV</span>, de solicitação do Poder Legislativo ou do Poder Executivo coacto ou impedido, ou de requisição do Supremo Tribunal Federal, se a coação for exercida contra o Poder Judiciário;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "II –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_cpt_inc2",
//                   id: "",
//                   text: "no caso de desobediência a ordem ou decisão judiciária, de requisição do Supremo Tribunal Federal, do Superior Tribunal de Justiça ou do Tribunal Superior Eleitoral;",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "III –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_cpt_inc3",
//                   id: "",
//                   text: 'de provimento, pelo Supremo Tribunal Federal, de representação do Procurador-Geral da República, na hipótese do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7">art. 34, VII</span>;',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "IV –",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_cpt_inc4",
//                   id: "",
//                   text: "de provimento, pelo Superior Tribunal de Justiça, de representação do Procurador-Geral da República, no caso de recusa à execução de lei federal.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "§ 1º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_par1",
//               id: "",
//               text: "O decreto de intervenção, que especificará a amplitude, o prazo e as condições de execução e que, se couber, nomeará o interventor, será submetido à apreciação do Congresso Nacional ou da Assembléia Legislativa do Estado, no prazo de vinte e quatro horas.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 2º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_par2",
//               id: "",
//               text: "Se não estiver funcionando o Congresso Nacional ou a Assembléia Legislativa, far-se-á convocação extraordinária, no mesmo prazo de vinte e quatro horas.",
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 3º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_par3",
//               id: "",
//               text: 'Nos casos do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc6">art. 34, VI</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art34_cpt_inc7">VII</span>, ou do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art35_cpt_inc4">art. 35, IV</span>, dispensada a apreciação pelo Congresso Nacional ou pela Assembléia Legislativa, o decreto limitar-se-á a suspender a execução do ato impugnado, se essa medida bastar ao restabelecimento da normalidade.',
//               children: [],
//               loc: 1,
//             },
//             {
//               name: "§ 4º",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art36_par4",
//               id: "",
//               text: "Cessados os motivos da intervenção, as autoridades afastadas de seus cargos a estes voltarão, salvo impedimento legal.",
//               children: [],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//     {
//       name: "CAPÍTULO VII",
//       id: "https://normas.leg.br/?urn=urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7",
//       legislationIdentifier:
//         "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7",
//       children: [
//         {
//           name: "Seção I",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7_sec1",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 37.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art37",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt",
//                   id: "",
//                   text: "A administração pública direta, indireta ou fundacional, de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e, também, ao seguinte:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc1",
//                       id: "",
//                       text: "os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc2",
//                       id: "",
//                       text: "a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc3",
//                       id: "",
//                       text: "o prazo de validade do concurso público será de até dois anos, prorrogável uma vez, por igual período;",
//                       loc: 1,
//                     },
//                     {
//                       name: "IV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc4",
//                       id: "",
//                       text: "durante o prazo improrrogável previsto no edital de convocação, aquele aprovado em concurso público de provas ou de provas e títulos será convocado com prioridade sobre novos concursados para assumir cargo ou emprego, na carreira;",
//                       loc: 1,
//                     },
//                     {
//                       name: "V –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc5",
//                       id: "",
//                       text: "os cargos em comissão e as funções de confiança serão exercidos, preferencialmente, por servidores ocupantes de cargo de carreira técnica ou profissional, nos casos e condições previstos em lei;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VI –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc6",
//                       id: "",
//                       text: "é garantido ao servidor público civil o direito à livre associação sindical;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc7",
//                       id: "",
//                       text: "o direito de greve será exercido nos termos e nos limites definidos em lei complementar;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VIII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc8",
//                       id: "",
//                       text: "a lei reservará percentual dos cargos e empregos públicos para as pessoas portadoras de deficiência e definirá os critérios de sua admissão;",
//                       loc: 1,
//                     },
//                     {
//                       name: "IX –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc9",
//                       id: "",
//                       text: "a lei estabelecerá os casos de contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público;",
//                       loc: 1,
//                     },
//                     {
//                       name: "X –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc10",
//                       id: "",
//                       text: "a revisão geral da remuneração dos servidores públicos, sem distinção de índices entre servidores públicos civis e militares, far-se-á sempre na mesma loc;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XI –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc11",
//                       id: "",
//                       text: "a lei fixará o limite máximo e a relação de valores entre a maior e a menor remuneração dos servidores públicos, observados, como limites máximos e no âmbito dos respectivos Poderes, os valores percebidos como remuneração, em espécie, a qualquer título, por membros do Congresso Nacional, Ministros de Estado e Ministros do Supremo Tribunal Federal e seus correspondentes nos Estados, no Distrito Federal e nos Territórios, e, nos Municípios, os valores percebidos como remuneração, em espécie, pelo Prefeito;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc12",
//                       id: "",
//                       text: "os vencimentos dos cargos do Poder Legislativo e do Poder Judiciário não poderão ser superiores aos pagos pelo Poder Executivo;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XIII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc13",
//                       id: "",
//                       text: 'é vedada a vinculação ou equiparação de vencimentos, para o efeito de remuneração de pessoal do serviço público, ressalvado o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc13">inciso anterior</span> e no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par1">art. 39, § 1º</span>;',
//                       loc: 1,
//                     },
//                     {
//                       name: "XIV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc14",
//                       id: "",
//                       text: "os acréscimos pecuniários percebidos por servidor público não serão computados nem acumulados, para fins de concessão de acréscimos ulteriores, sob o mesmo título ou idêntico fundamento;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc15",
//                       id: "",
//                       text: 'os vencimentos dos servidores públicos, civis e militares, são irredutíveis e a remuneração observará o que dispõem os <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc11">arts. 37, XI</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc12">XII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art150_cpt_inc2">150, II</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_cpt_inc3">153, III</span>, e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art153_par2_inc1">153, § 2º, I</span>;',
//                       loc: 1,
//                     },
//                     {
//                       name: "XVI –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc16",
//                       id: "",
//                       text: "é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários:",
//                       loc: 1,
//                     },
//                     {
//                       name: "XVII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc17",
//                       id: "",
//                       text: "a proibição de acumular estende-se a empregos e funções e abrange autarquias, empresas públicas, sociedades de economia mista e fundações mantidas pelo poder público;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XVIII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc18",
//                       id: "",
//                       text: "a administração fazendária e seus servidores fiscais terão, dentro de suas áreas de competência e jurisdição, precedência sobre os demais setores administrativos, na forma da lei;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XIX –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc19",
//                       id: "",
//                       text: "somente por lei específica poderão ser criadas empresa pública, sociedade de economia mista, autarquia ou fundação pública;",
//                       loc: 1,
//                     },
//                     {
//                       name: "XX –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc20",
//                       id: "",
//                       text: 'depende de autorização legislativa, em cada caso, a criação de subsidiárias das entidades mencionadas no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc19">inciso anterior</span>, assim como a participação de qualquer delas em empresa privada;',
//                       loc: 1,
//                     },
//                     {
//                       name: "XXI –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc21",
//                       id: "",
//                       text: "ressalvados os casos especificados na legislação, as obras, serviços, compras e alienações serão contratados mediante processo de licitação pública que assegure igualdade de condições a todos os concorrentes, com cláusulas que estabeleçam obrigações de pagamento, mantidas as condições efetivas da proposta, nos termos da lei, o qual somente permitirá as exigências de qualificação técnica e econômica indispensáveis à garantia do cumprimento das obrigações.",
//                       loc: 1,
//                     },
//                     {
//                       name: "XXII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc22,emc-42-2003-12-19",
//                       id: "",
//                       text: "as administrações tributárias da União, dos Estados, do Distrito Federal e dos Municípios, atividades essenciais ao funcionamento do Estado, exercidas por servidores de carreiras específicas, terão recursos prioritários para a realização de suas atividades e atuarão de forma integrada, inclusive com o compartilhamento de cadastros e de informações fiscais, na forma da lei ou convênio.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par1",
//                   id: "",
//                   text: "A publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par2",
//                   id: "",
//                   text: 'A não-observância do disposto nos <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc2">incisos II</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art37_cpt_inc3">III</span> implicará a nulidade do ato e a punição da autoridade responsável, nos termos da lei.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par3",
//                   id: "",
//                   text: "As reclamações relativas à prestação de serviços públicos serão disciplinadas em lei.",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par3_inc1,emc-19-1998-06-04",
//                       id: "",
//                       text: "as reclamações relativas à prestação dos serviços públicos em geral, asseguradas a manutenção de serviços de atendimento ao usuário e a avaliação periódica, externa e interna, da qualidade dos serviços;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par3_inc2,emc-19-1998-06-04",
//                       id: "",
//                       text: "o acesso dos usuários a registros administrativos e a informações sobre atos de governo, observado o disposto no art. 5º, X e XXXIII;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par3_inc3,emc-19-1998-06-04",
//                       id: "",
//                       text: "a disciplina da representação contra o exercício negligente ou abusivo de cargo, emprego ou função na administração pública.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par4",
//                   id: "",
//                   text: "Os atos de improbidade administrativa importarão a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário, na forma e gradação previstas em lei, sem prejuízo da ação penal cabível.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 5º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par5",
//                   id: "",
//                   text: "A lei estabelecerá os prazos de prescrição para ilícitos praticados por qualquer agente, servidor ou não, que causem prejuízos ao erário, ressalvadas as respectivas ações de ressarcimento.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 6º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par6",
//                   id: "",
//                   text: "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 7º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par7,emc-19-1998-06-04",
//                   id: "",
//                   text: "A lei disporá sobre os requisitos e as restrições ao ocupante de cargo ou emprego da administração direta e indireta que possibilite o acesso a informações privilegiadas.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 8º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par8,emc-19-1998-06-04",
//                   id: "",
//                   text: "A autonomia gerencial, orçamentária e financeira dos órgãos e entidades da administração direta e indireta poderá ser ampliada mediante contrato, a ser firmado entre seus administradores e o poder público, que tenha por objeto a fixação de metas de desempenho para o órgão ou entidade, cabendo à lei dispor sobre:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par8_inc1,emc-19-1998-06-04",
//                       id: "",
//                       text: "o prazo de duração do contrato;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par8_inc2,emc-19-1998-06-04",
//                       id: "",
//                       text: "os controles e critérios de avaliação de desempenho, direitos, obrigações e responsabilidade dos dirigentes;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par8_inc3,emc-19-1998-06-04",
//                       id: "",
//                       text: "a remuneração do pessoal.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 9º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par9,emc-19-1998-06-04",
//                   id: "",
//                   text: "O disposto no inciso XI aplica-se às empresas públicas e às sociedades de economia mista, e suas subsidiárias, que receberem recursos da União, dos Estados, do Distrito Federal ou dos Municípios para pagamento de despesas de pessoal ou de custeio em geral.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 10.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par10,emc-20-1998-12-15",
//                   id: "",
//                   text: 'É vedada a percepção simultânea de proventos de aposentadoria decorrentes do art. 40 ou dos arts. 42 e 142 com a remuneração de cargo, emprego ou função pública, ressalvados os cargos acumuláveis na forma desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span>, os cargos eletivos e os cargos em comissão declarados em lei de livre nomeação e exoneração.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 11.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par11,emc-47-2005-07-05",
//                   id: "",
//                   text: "Não serão computadas, para efeito dos limites remuneratórios de que trata o inciso XI do caput deste artigo, as parcelas de caráter indenizatório previstas em lei.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 12.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par12,emc-47-2005-07-05",
//                   id: "",
//                   text: "Para os fins do disposto no inciso XI do caput deste artigo, fica facultado aos Estados e ao Distrito Federal fixar, em seu âmbito, mediante emenda às respectivas Constituições e Lei Orgânica, como limite único, o subsídio mensal dos Desembargadores do respectivo Tribunal de Justiça, limitado a noventa inteiros e vinte e cinco centésimos por cento do subsídio mensal dos Ministros do Supremo Tribunal Federal, não se aplicando o disposto neste parágrafo aos subsídios dos Deputados Estaduais e Distritais e dos Vereadores.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 13.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par13,emc-103-2019-11-12",
//                   id: "",
//                   text: "O servidor público titular de cargo efetivo poderá ser readaptado para exercício de cargo cujas atribuições e responsabilidades sejam compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental, enquanto permanecer nesta condição, desde que possua a habilitação e o nível de escolaridade exigidos para o cargo de destino, mantida a remuneração do cargo de origem.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 14.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par14,emc-103-2019-11-12",
//                   id: "",
//                   text: "A aposentadoria concedida com a utilização de tempo de contribuição decorrente de cargo, emprego ou função pública, inclusive do Regime Geral de Previdência Social, acarretará o rompimento do vínculo que gerou o referido tempo de contribuição.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 15.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par15,emc-103-2019-11-12",
//                   id: "",
//                   text: "É vedada a complementação de aposentadorias de servidores públicos e de pensões por morte a seus dependentes que não seja decorrente do disposto nos §§ 14 a 16 do art. 40 ou que não seja prevista em lei que extinga regime próprio de previdência social.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 16.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art37_par16,emc-109-2021-03-15",
//                   id: "",
//                   text: "Os órgãos e entidades da administração pública, individual ou conjuntamente, devem realizar avaliação das políticas públicas, inclusive com divulgação do objeto a ser avaliado e dos resultados alcançados, na forma da lei.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "Art. 38.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art38",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt",
//                   id: "",
//                   text: "Ao servidor público em exercício de mandato eletivo aplicam-se as seguintes disposições:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc1",
//                       id: "",
//                       text: "tratando-se de mandato eletivo federal, estadual ou distrital, ficará afastado de seu cargo, emprego ou função;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc2",
//                       id: "",
//                       text: "investido no mandato de Prefeito, será afastado do cargo, emprego ou função, sendo-lhe facultado optar pela sua remuneração;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc3",
//                       id: "",
//                       text: 'investido no mandato de Vereador, havendo compatibilidade de horários, perceberá as vantagens de seu cargo, emprego ou função, sem prejuízo da remuneração do cargo eletivo, e, não havendo compatibilidade, será aplicada a norma do <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc2">inciso anterior</span>;',
//                       loc: 1,
//                     },
//                     {
//                       name: "IV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc4",
//                       id: "",
//                       text: "em qualquer caso que exija o afastamento para o exercício de mandato eletivo, seu tempo de serviço será contado para todos os efeitos legais, exceto para promoção por merecimento;",
//                       loc: 1,
//                     },
//                     {
//                       name: "V –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art38_cpt_inc5",
//                       id: "",
//                       text: "para efeito de benefício previdenciário, no caso de afastamento, os valores serão determinados como se no exercício estivesse.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Seção II",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7_sec2",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 39.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art39",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_cpt",
//                   id: "",
//                   text: "A União, os Estados, o Distrito Federal e os Municípios instituirão, no âmbito de sua competência, regime jurídico único e planos de carreira para os servidores da administração pública direta, das autarquias e das fundações públicas.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par1",
//                   id: "",
//                   text: "A lei assegurará, aos servidores da administração direta, isonomia de vencimentos para cargos de atribuições iguais ou assemelhados do mesmo Poder ou entre servidores dos Poderes Executivo, Legislativo e Judiciário, ressalvadas as vantagens de caráter individual e as relativas à natureza ou ao local de trabalho.",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par1_inc1,emc-19-1998-06-04",
//                       id: "",
//                       text: "a natureza, o grau de responsabilidade e a complexidade dos cargos componentes de cada carreira;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par1_inc2,emc-19-1998-06-04",
//                       id: "",
//                       text: "os requisitos para a investidura;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par1_inc3,emc-19-1998-06-04",
//                       id: "",
//                       text: "as peculiaridades dos cargos.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par2",
//                   id: "",
//                   text: 'Aplica-se a esses servidores o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc4">art. 7º, IV</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc6">VI</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc7">VII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc8">VIII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc9">IX</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc12">XII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc13">XIII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc15">XV</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc16">XVI</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc17">XVII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc18">XVIII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc19">XIX</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc20">XX</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc22">XXII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc23">XXIII</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc30">XXX</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par3,emc-19-1998-06-04",
//                   id: "",
//                   text: "Aplica-se aos servidores ocupantes de cargo público o disposto no art. 7º, IV, VII, VIII, IX, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX, XXII e XXX, podendo a lei estabelecer requisitos diferenciados de admissão quando a natureza do cargo o exigir.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par4,emc-19-1998-06-04",
//                   id: "",
//                   text: "O membro de Poder, o detentor de mandato eletivo, os Ministros de Estado e os Secretários Estaduais e Municipais serão remunerados exclusivamente por subsídio fixado em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, prêmio, verba de representação ou outra espécie remuneratória, obedecido, em qualquer caso, o disposto no art. 37, X e XI.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 5º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par5,emc-19-1998-06-04",
//                   id: "",
//                   text: "Lei da União, dos Estados, do Distrito Federal e dos Municípios poderá estabelecer a relação entre a maior e a menor remuneração dos servidores públicos, obedecido, em qualquer caso, o disposto no art. 37, XI.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 6º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par6,emc-19-1998-06-04",
//                   id: "",
//                   text: "Os Poderes Executivo, Legislativo e Judiciário publicarão anualmente os valores do subsídio e da remuneração dos cargos e empregos públicos.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 7º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par7,emc-19-1998-06-04",
//                   id: "",
//                   text: "Lei da União, dos Estados, do Distrito Federal e dos Municípios disciplinará a aplicação de recursos orçamentários provenientes da economia com despesas correntes em cada órgão, autarquia e fundação, para aplicação no desenvolvimento de programas de qualidade e produtividade, treinamento e desenvolvimento, modernização, reaparelhamento e racionalização do serviço público, inclusive sob a forma de adicional ou prêmio de produtividade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 8º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par8,emc-19-1998-06-04",
//                   id: "",
//                   text: "A remuneração dos servidores públicos organizados em carreira poderá ser fixada nos termos do § 4º.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 9º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art39_par9,emc-103-2019-11-12",
//                   id: "",
//                   text: "É vedada a incorporação de vantagens de caráter temporário ou vinculadas ao exercício de função de confiança ou de cargo em comissão à remuneração do cargo efetivo.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "Art. 40.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art40",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt",
//                   id: "",
//                   text: "O servidor será aposentado:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt_inc1",
//                       id: "",
//                       text: "por invalidez permanente, sendo os proventos integrais quando decorrentes de acidente em serviço, moléstia profissional ou doença grave, contagiosa ou incurável, especificadas em lei, e proporcionais nos demais casos;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt_inc2",
//                       id: "",
//                       text: "compulsoriamente, aos setenta anos de idade, com proventos proporcionais ao tempo de serviço;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt_inc3",
//                       id: "",
//                       text: "voluntariamente:",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par1",
//                   id: "",
//                   text: 'Lei complementar poderá estabelecer exceções ao disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt_inc3_ali1">inciso III, a</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art40_cpt_inc3_ali3">c</span>, no caso de exercício de atividades consideradas penosas, insalubres ou perigosas.',
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par1_inc1,emc-20-1998-12-15",
//                       id: "",
//                       text: "por invalidez permanente, sendo os proventos proporcionais ao tempo de contribuição, exceto se decorrente de acidente em serviço, moléstia profissional ou doença grave, contagiosa ou incurável, especificadas em lei;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par1_inc2,emc-20-1998-12-15",
//                       id: "",
//                       text: "compulsoriamente, aos setenta anos de idade, com proventos proporcionais ao tempo de contribuição;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par1_inc3,emc-20-1998-12-15",
//                       id: "",
//                       text: "voluntariamente, desde que cumprido tempo mínimo de dez anos de efetivo exercício no serviço público e cinco anos no cargo efetivo em que se dará a aposentadoria, observadas as seguintes condições:",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par2",
//                   id: "",
//                   text: "A lei disporá sobre a aposentadoria em cargos ou empregos temporários.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par3",
//                   id: "",
//                   text: "O tempo de serviço público federal, estadual ou municipal será computado integralmente para os efeitos de aposentadoria e de disponibilidade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4",
//                   id: "",
//                   text: "Os proventos da aposentadoria serão revistos, na mesma proporção e na mesma loc, sempre que se modificar a remuneração dos servidores em atividade, sendo também estendidos aos inativos quaisquer benefícios ou vantagens posteriormente concedidos aos servidores em atividade, inclusive quando decorrentes da transformação ou reclassificação do cargo ou função em que se deu a aposentadoria, na forma da lei.",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4_inc1,emc-47-2005-07-05",
//                       id: "",
//                       text: "portadores de deficiência;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4_inc2,emc-47-2005-07-05",
//                       id: "",
//                       text: "que exerçam atividades de risco;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4_inc3,emc-47-2005-07-05",
//                       id: "",
//                       text: "cujas atividades sejam exercidas sob condições especiais que prejudiquem a saúde ou a integridade física.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º-A.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4-1,emc-103-2019-11-12",
//                   id: "",
//                   text: "Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de servidores com deficiência, previamente submetidos a avaliação biopsicossocial realizada por equipe multiprofissional e interdisciplinar.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º-B.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4-2,emc-103-2019-11-12",
//                   id: "",
//                   text: "Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de ocupantes do cargo de agente penitenciário, de agente socioeducativo ou de policial dos órgãos de que tratam o inciso IV do caput do art. 51, o inciso XIII do caput do art. 52 e os incisos I a IV do caput do art. 144.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º-C.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4-3,emc-103-2019-11-12",
//                   id: "",
//                   text: "Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de servidores cujas atividades sejam exercidas com efetiva exposição a agentes químicos, físicos e biológicos prejudiciais à saúde, ou associação desses agentes, vedada a caracterização por categoria profissional ou ocupação.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 5º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par5",
//                   id: "",
//                   text: 'O benefício da pensão por morte corresponderá à totalidade dos vencimentos ou proventos do servidor falecido, até o limite estabelecido em lei, observado o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par4">parágrafo anterior</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 6º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par6,emc-3-1993-03-17",
//                   id: "",
//                   text: "As aposentadorias e pensões dos servidores públicos federais serão custeadas com recursos provenientes da União e das contribuições dos servidores, na forma da lei.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 7º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par7,emc-20-1998-12-15",
//                   id: "",
//                   text: "Lei disporá sobre a concessão do benefício da pensão por morte, que será igual ao valor dos proventos do servidor falecido ou ao valor dos proventos a que teria direito o servidor em atividade na loc de seu falecimento, observado o disposto no § 3º.",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par7_inc1,emc-41-2003-12-19",
//                       id: "",
//                       text: "ao valor da totalidade dos proventos do servidor falecido, até o limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201, acrescido de setenta por cento da parcela excedente a este limite, caso aposentado à loc do óbito; ou",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par7_inc2,emc-41-2003-12-19",
//                       id: "",
//                       text: "ao valor da totalidade da remuneração do servidor no cargo efetivo em que se deu o falecimento, até o limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201, acrescido de setenta por cento da parcela excedente a este limite, caso em atividade na loc do óbito.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 8º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par8,emc-20-1998-12-15",
//                   id: "",
//                   text: "Observado o disposto no art. 37, XI, os proventos de aposentadoria e as pensões serão revistos na mesma proporção e na mesma loc, sempre que se modificar a remuneração dos servidores em atividade, sendo também estendidos aos aposentados e aos pensionistas quaisquer benefícios ou vantagens posteriormente concedidos aos servidores em atividade, inclusive quando decorrentes da transformação ou reclassificação do cargo ou função em que se deu a aposentadoria ou que serviu de referência para a concessão da pensão, na forma da lei.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 9º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par9,emc-20-1998-12-15",
//                   id: "",
//                   text: "O tempo de contribuição federal, estadual ou municipal será contado para efeito de aposentadoria e o tempo de serviço correspondente para efeito de disponibilidade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 10.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par10,emc-20-1998-12-15",
//                   id: "",
//                   text: "A lei não poderá estabelecer qualquer forma de contagem de tempo de contribuição fictício.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 11.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par11,emc-20-1998-12-15",
//                   id: "",
//                   text: 'Aplica-se o limite fixado no art. 37, XI, à soma total dos proventos de inatividade, inclusive quando decorrentes da acumulação de cargos ou empregos públicos, bem como de outras atividades sujeitas a contribuição para o regime geral de previdência social, e ao montante resultante da adição de proventos de inatividade com remuneração de cargo acumulável na forma desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span>, cargo em comissão declarado em lei de livre nomeação e exoneração, e de cargo eletivo.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 12.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par12,emc-20-1998-12-15",
//                   id: "",
//                   text: "Além do disposto neste artigo, o regime de previdência dos servidores públicos titulares de cargo efetivo observará, no que couber, os requisitos e critérios fixados para o regime geral de previdência social.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 13.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par13,emc-20-1998-12-15",
//                   id: "",
//                   text: "Ao servidor ocupante, exclusivamente, de cargo em comissão declarado em lei de livre nomeação e exoneração bem como de outro cargo temporário ou de emprego público, aplica-se o regime geral de previdência social.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 14.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par14,emc-20-1998-12-15",
//                   id: "",
//                   text: "A União, os Estados, o Distrito Federal e os Municípios, desde que instituam regime de previdência complementar para os seus respectivos servidores titulares de cargo efetivo, poderão fixar, para o valor das aposentadorias e pensões a serem concedidas pelo regime de que trata este artigo, o limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 15.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par15,emc-20-1998-12-15",
//                   id: "",
//                   text: "Observado o disposto no art. 202, lei complementar disporá sobre as normas gerais para a instituição de regime de previdência complementar pela União, Estados, Distrito Federal e Municípios, para atender aos seus respectivos servidores titulares de cargo efetivo.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 16.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par16,emc-20-1998-12-15",
//                   id: "",
//                   text: "Somente mediante sua prévia e expressa opção, o disposto nos §§ 14 e 15 poderá ser aplicado ao servidor que tiver ingressado no serviço público até a loc da publicação do ato de instituição do correspondente regime de previdência complementar.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 17.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par17,emc-41-2003-12-19",
//                   id: "",
//                   text: "Todos os valores de remuneração considerados para o cálculo do benefício previsto no § 3° serão devidamente atualizados, na forma da lei.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 18.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par18,emc-41-2003-12-19",
//                   id: "",
//                   text: "Incidirá contribuição sobre os proventos de aposentadorias e pensões concedidas pelo regime de que trata este artigo que superem o limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201, com percentual igual ao estabelecido para os servidores titulares de cargos efetivos.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 19.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par19,emc-41-2003-12-19",
//                   id: "",
//                   text: "O servidor de que trata este artigo que tenha completado as exigências para aposentadoria voluntária estabelecidas no § 1º, III, a, e que opte por permanecer em atividade fará jus a um abono de permanência equivalente ao valor da sua contribuição previdenciária até completar as exigências para aposentadoria compulsória contidas no § 1º, II.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 20.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par20,emc-41-2003-12-19",
//                   id: "",
//                   text: "Fica vedada a existência de mais de um regime próprio de previdência social para os servidores titulares de cargos efetivos, e de mais de uma unidade gestora do respectivo regime em cada ente estatal, ressalvado o disposto no art. 142, § 3º, X.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 21.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par21,emc-47-2005-07-05",
//                   id: "",
//                   text: 'A contribuição prevista no § 18 deste artigo incidirá apenas sobre as parcelas de proventos de aposentadoria e de pensão que superem o dobro do limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201 desta <span xmlns="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988">Constituição</span>, quando o beneficiário, na forma da lei, for portador de doença incapacitante.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 22.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22,emc-103-2019-11-12",
//                   id: "",
//                   text: "Vedada a instituição de novos regimes próprios de previdência social, lei complementar federal estabelecerá, para os que já existam, normas gerais de organização, de funcionamento e de responsabilidade em sua gestão, dispondo, entre outros aspectos, sobre:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc1,emc-103-2019-11-12",
//                       id: "",
//                       text: "requisitos para sua extinção e consequente migração para o Regime Geral de Previdência Social;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc2,emc-103-2019-11-12",
//                       id: "",
//                       text: "modelo de arrecadação, de aplicação e de utilização dos recursos;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc3,emc-103-2019-11-12",
//                       id: "",
//                       text: "fiscalização pela União e controle externo e social;",
//                       loc: 1,
//                     },
//                     {
//                       name: "IV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc4,emc-103-2019-11-12",
//                       id: "",
//                       text: "definição de equilíbrio financeiro e atuarial;",
//                       loc: 1,
//                     },
//                     {
//                       name: "V –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc5,emc-103-2019-11-12",
//                       id: "",
//                       text: "condições para instituição do fundo com finalidade previdenciária de que trata o art. 249 e para vinculação a ele dos recursos provenientes de contribuições e dos bens, direitos e ativos de qualquer natureza;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VI –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc6,emc-103-2019-11-12",
//                       id: "",
//                       text: "mecanismos de equacionamento do déficit atuarial;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc7,emc-103-2019-11-12",
//                       id: "",
//                       text: "estruturação do órgão ou entidade gestora do regime, observados os princípios relacionados com governança, controle interno e transparência;",
//                       loc: 1,
//                     },
//                     {
//                       name: "VIII –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc8,emc-103-2019-11-12",
//                       id: "",
//                       text: "condições e hipóteses para responsabilização daqueles que desempenhem atribuições relacionadas, direta ou indiretamente, com a gestão do regime;",
//                       loc: 1,
//                     },
//                     {
//                       name: "IX –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc9,emc-103-2019-11-12",
//                       id: "",
//                       text: "condições para adesão a consórcio público;",
//                       loc: 1,
//                     },
//                     {
//                       name: "X –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par22_inc10,emc-103-2019-11-12",
//                       id: "",
//                       text: "parâmetros para apuração da base de cálculo e definição de alíquota de contribuições ordinárias e extraordinárias.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//             {
//               name: "Art. 41.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art41",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_cpt",
//                   id: "",
//                   text: "São estáveis, após dois anos de efetivo exercício, os servidores nomeados em virtude de concurso público.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par1",
//                   id: "",
//                   text: "O servidor público estável só perderá o cargo em virtude de sentença judicial transitada em julgado ou mediante processo administrativo em que lhe seja assegurada ampla defesa.",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par1_inc1,emc-19-1998-06-04",
//                       id: "",
//                       text: "em virtude de sentença judicial transitada em julgado;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par1_inc2,emc-19-1998-06-04",
//                       id: "",
//                       text: "mediante processo administrativo em que lhe seja assegurada ampla defesa;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par1_inc3,emc-19-1998-06-04",
//                       id: "",
//                       text: "mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par2",
//                   id: "",
//                   text: "Invalidada por sentença judicial a demissão do servidor estável, será ele reintegrado, e o eventual ocupante da vaga reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par3",
//                   id: "",
//                   text: "Extinto o cargo ou declarada sua desnecessidade, o servidor estável ficará em disponibilidade remunerada, até seu adequado aproveitamento em outro cargo.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art41_par4,emc-19-1998-06-04",
//                   id: "",
//                   text: "Como condição para a aquisição da estabilidade, é obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Seção III",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7_sec3",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 42.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art42",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_cpt",
//                   id: "",
//                   text: "São servidores militares federais os integrantes das Forças Armadas e servidores militares dos Estados, Territórios e Distrito Federal os integrantes de suas polícias militares e de seus corpos de bombeiros militares.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par1",
//                   id: "",
//                   text: "As patentes, com prerrogativas, direitos e deveres a elas inerentes, são asseguradas em plenitude aos oficiais da ativa, da reserva ou reformados das Forças Armadas, das polícias militares e dos corpos de bombeiros militares dos Estados, dos Territórios e do Distrito Federal, sendo-lhes privativos os títulos, postos e uniformes militares.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par2",
//                   id: "",
//                   text: "As patentes dos oficiais das Forças Armadas são conferidas pelo Presidente da República, e as dos oficiais das polícias militares e corpos de bombeiros militares dos Estados, Territórios e Distrito Federal, pelos respectivos Governadores.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par3",
//                   id: "",
//                   text: "O militar em atividade que aceitar cargo público civil permanente será transferido para a reserva.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 4º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par4",
//                   id: "",
//                   text: "O militar da ativa que aceitar cargo, emprego ou função pública temporária, não eletiva, ainda que da administração indireta, ficará agregado ao respectivo quadro e somente poderá, enquanto permanecer nessa situação, ser promovido por antiguidade, contando-se-lhe o tempo de serviço apenas para aquela promoção e transferência para a reserva, sendo depois de dois anos de afastamento, contínuos ou não, transferido para a inatividade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 5º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par5",
//                   id: "",
//                   text: "Ao militar são proibidas a sindicalização e a greve.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 6º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par6",
//                   id: "",
//                   text: "O militar, enquanto em efetivo serviço, não pode estar filiado a partidos políticos.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 7º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par7",
//                   id: "",
//                   text: "O oficial das Forças Armadas só perderá o posto e a patente se for julgado indigno do oficialato ou com ele incompatível, por decisão de tribunal militar de caráter permanente, em tempo de paz, ou de tribunal especial, em tempo de guerra.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 8º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par8",
//                   id: "",
//                   text: "O oficial condenado na justiça comum ou militar a pena privativa de liberdade superior a dois anos, por sentença transitada em julgado, será submetido ao julgamento previsto no parágrafo anterior.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 9º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par9",
//                   id: "",
//                   text: "A lei disporá sobre os limites de idade, a estabilidade e outras condições de transferência do servidor militar para a inatividade.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 10.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par10",
//                   id: "",
//                   text: 'Aplica-se aos servidores a que se refere <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art42">este artigo</span>, e a seus pensionistas, o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par2">art. 40, §§ 4º</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art40_par5">5º</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 11.",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art42_par11",
//                   id: "",
//                   text: 'Aplica-se aos servidores a que se refere este artigo o disposto no <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc8">art. 7º, VIII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc12">XII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc17">XVII</span>, <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc18">XVIII</span> e <span xmlns:lx="http://www.lexml.gov.br/1.0" xlink:href="urn:lex:br:federal:constituicao:1988-10-05;1988!art7_cpt_inc19">XIX</span>.',
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//         {
//           name: "Seção IV",
//           legislationIdentifier:
//             "urn:lex:br:federal:constituicao:1988-10-05;1988!tit3_cap7_sec4",
//           id: "",
//           paragraphs: [
//             {
//               name: "Art. 43.",
//               legislationIdentifier:
//                 "urn:lex:br:federal:constituicao:1988-10-05;1988!art43",
//               id: "",
//               children: [
//                 {
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_cpt",
//                   id: "",
//                   text: "Para efeitos administrativos, a União poderá articular sua ação em um mesmo complexo geoeconômico e social, visando a seu desenvolvimento e à redução das desigualdades regionais.",
//                   children: [],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 1º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par1",
//                   id: "",
//                   text: "Lei complementar disporá sobre:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par1_inc1",
//                       id: "",
//                       text: "as condições para integração de regiões em desenvolvimento;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par1_inc2",
//                       id: "",
//                       text: "a composição dos organismos regionais que executarão, na forma da lei, os planos regionais, integrantes dos planos nacionais de desenvolvimento econômico e social, aprovados juntamente com estes.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 2º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par2",
//                   id: "",
//                   text: "Os incentivos regionais compreenderão, além de outros, na forma da lei:",
//                   children: [
//                     {
//                       name: "I –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par2_inc1",
//                       id: "",
//                       text: "igualdade de tarifas, fretes, seguros e outros itens de custos e preços de responsabilidade do poder público;",
//                       loc: 1,
//                     },
//                     {
//                       name: "II –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par2_inc2",
//                       id: "",
//                       text: "juros favorecidos para financiamento de atividades prioritárias;",
//                       loc: 1,
//                     },
//                     {
//                       name: "III –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par2_inc3",
//                       id: "",
//                       text: "isenções, reduções ou diferimento temporário de tributos federais devidos por pessoas físicas ou jurídicas;",
//                       loc: 1,
//                     },
//                     {
//                       name: "IV –",
//                       legislationIdentifier:
//                         "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par2_inc4",
//                       id: "",
//                       text: "prioridade para o aproveitamento econômico e social dos rios e das massas de água represadas ou represáveis nas regiões de baixa renda, sujeitas a secas periódicas.",
//                       loc: 1,
//                     },
//                   ],
//                   loc: 1,
//                 },
//                 {
//                   name: "§ 3º",
//                   legislationIdentifier:
//                     "urn:lex:br:federal:constituicao:1988-10-05;1988!art43_par3",
//                   id: "",
//                   text: "Nas áreas a que se refere o § 2º, IV, a União incentivará a recuperação de terras áridas e cooperará com os pequenos e médios proprietários rurais para o estabelecimento, em suas glebas, de fontes de água e de pequena irrigação.",
//                   children: [],
//                   loc: 1,
//                 },
//               ],
//               loc: 1,
//             },
//           ],
//           foreseenChanges: [],
//         },
//       ],
//       loc: 1,
//     },
//   ],
//   loc: 1,
// }

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTreeMap = () => (
  <ResponsiveTreeMap
    data={data}
    identity="name"
    value="loc"
    label="id"
    orientLabel={false}
    tooltip={(node) => <span style={{ color: "#fff" }}>{node.node.id}</span>}
    valueFormat=".02s"
    labelSkipSize={120}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.2]],
    }}
    parentLabelPosition="bottom"
    parentLabelTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    colors={{ scheme: "greys" }}
    borderColor="#fff"
    onClick={(note) => {
      // note.color = "#f47560"
      note.borderColor = "rgb(233, 217, 88)"
      console.log(note)
    }}
  />
)

export default MyResponsiveTreeMap
