<<<<<<< HEAD
# SkillUpPlus 2030+ – Requalificação Digital com React Native🧠

📱 Aplicativo Mobile desenvolvido em React Native + Expo
🔥 Autenticação com Firebase
🤖 Recomendações personalizadas usando Inteligência Artificial (OpenAI)
🌱 ODS da ONU: 4, 8, 9 e 10

# Descrição do Projeto📘

O SkillUpPlus 2030+ é um aplicativo mobile criado como solução para a Global Solution – Mobile Development & IoT (FIAP 2025.2).
Ele foi projetado para apoiar estudantes e profissionais na requalificação digital e no desenvolvimento de habilidades essenciais para o futuro do trabalho.

Combinando IA generativa, trilhas de aprendizado, autenticação segura e uma interface futurista, o aplicativo fornece uma experiência personalizada alinhada às tendências tecnológicas de 2030+.

# Funcionalidades Principais🎯
🔐 Login e Cadastro com Firebase Authentication

Acesso seguro usando email e senha

Validação de formulários

Redirecionamento automático para a Home

📦 Persistência no Firebase Realtime Database

Armazena dados de perfil dos usuários:

Nome

Email

Interesses

Data de criação da conta

# Recomendações com Inteligência Artificial (OpenAI)🤖

Gera trilhas personalizadas usando modelo GPT

Baseado nos interesses do usuário

Retorno dinâmico e adaptativo usando API REST

# Navegação Híbrida com expo-router🧭

Tabs: Home, Trilhas e Perfil

Drawer: Recomendações IA

Stack: Fluxo de autenticação

# UI Moderna e Futurista🧩

Componentes customizados:

FuturisticButton

FuturisticInput

FuturisticCard

Paleta neon e visual inspirado em tecnologia 2030+

# Estrutura do Projeto🗂️
/SKILLUPLUS2030
 ├── app
 │   ├── (auth)
 │   │    ├── _layout.tsx
 │   │    ├── login.tsx
 │   │    └── register.tsx
 │   ├── (drawer)
 │   │    └── _layout.tsx
 │   ├── (tabs)
 │   │    ├── home.tsx
 │   │    ├── perfil.tsx
 │   │    ├── trilhas.tsx
 │   │    ├── _layout.tsx
 │   │    └── index.tsx
 │   └── _layout.tsx
 ├── asset
 │   └── logo.png
 ├── components
 ├── config
 │   ├── firebaseConfig.ts
 │   └── iaApi.ts
 ├── constants
 ├── hooks
 ├── scripts
 ├── app.json
 ├── babel.config.js
 └── package.json

# Tecnologias Utilizadas⚙️
Tecnologia	Uso
React Native (Expo)	Base do app mobile
Expo Router	Navegação híbrida (Tabs + Drawer + Stack)
Firebase Authentication	Login e cadastro
Firebase Realtime Database	Persistência dos dados do usuário
OpenAI API	IA para recomendações personalizadas
TypeScript	Tipagem estática e maior robustez
Ionicons	Ícones futuristas
Glassmorphism UI	Estética moderna
# Como Rodar o Projeto🚀
📌 Pré-requisitos

Node.js LTS

Expo CLI

Conta Firebase

Chave da OpenAI

🛠️ Instalação
git clone https://github.com/usuario/SkillUpPlus2030.git
cd SkillUpPlus2030
npm install

▶️ Executar o app
npx expo start


Depois:

Pressione a para abrir no Android Emulator

Ou escaneie o QR Code no Expo Go

# Integração com Firebase🔥

Arquivo: firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  databaseURL: "https://xxxxxx-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

# Integração com IA (OpenAI)🤖

Arquivo: iaApi.ts

import axios from "axios";

export async function gerarRecomendacao(perfil: { interesses: string[] }) {
  const prompt = `
  Usuário com interesses: ${perfil.interesses.join(', ')}.
  Gere 5 trilhas de aprendizado profissional para 2030+.
  `;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer SUA_CHAVE_AQUI`
      }
    }
  );

  return response.data.choices[0].message.content;
}

# Conexão com ODS da ONU🌍

O projeto contribui diretamente para:

🟦 ODS 4 — Educação de Qualidade

Acesso democratizado à capacitação tecnológica.

🟩 ODS 8 — Trabalho Decente e Crescimento Econômico

Estimula requalificação digital e empregabilidade.

🟨 ODS 9 — Indústria, Inovação e Infraestrutura

Uso de IA e mobile como ferramentas de transformação.

🟧 ODS 10 — Redução das Desigualdades

Permite que todos tenham acesso a conhecimento de ponta.

# Integrantes

| Nome | RM |
|------|-----|
| Adriano Lopes | RM98574 |
| Henrique de Brito | RM98831 |
| Rodrigo Lima | RM98326 |

# Conclusão🏁

O SkillUpPlus 2030+ cumpre integralmente o desafio proposto pela Global Solution, unindo tecnologia, educação, IA e inovação para preparar usuários para o futuro do trabalho.
Sua arquitetura modular, uso de Firebase e modelos avançados de IA tornam o aplicativo escalável, robusto e alinhado às demandas reais do mundo moderno.
=======
Este é um projeto Expo criado com create-expo-app.

🚀 Começando
Instalar dependências
npm install

Iniciar o app
npx expo start


No terminal, você verá opções para abrir o app em:

Build de desenvolvimento

Emulador Android

Simulador iOS

Expo Go, um sandbox limitado para testar o desenvolvimento com Expo

Você pode começar a desenvolver editando os arquivos dentro do diretório app.
Este projeto utiliza file-based routing (roteamento baseado em arquivos).

🧹 Criar um projeto limpo

Quando quiser começar do zero, execute:

npm run reset-project


Esse comando moverá o código inicial para o diretório app-example e criará um novo diretório app vazio, pronto para desenvolvimento.

📚 Aprenda mais

Para aprender mais sobre desenvolvimento com Expo, confira:

Documentação Expo: aprenda desde o básico até tópicos avançados.

Tutorial Learn Expo: passo a passo onde você cria um projeto que roda em Android, iOS e Web.

🤝 Participe da comunidade

Junte-se à comunidade de desenvolvedores que criam apps universais:

Expo no GitHub: veja a plataforma open source e contribua.

Comunidade no Discord: converse com usuários Expo e tire dúvidas.
>>>>>>> 39ef3d1622c9e034320f98215aaf1cda8a74c743
