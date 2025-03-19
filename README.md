# Teste técnico para a Agile Connect

Desenvolver um aplicativo de dicionário que permite buscar definições de palavras em inglês, com pronúncia e exemplos

## Duração

24 horas (aproximadamente)

## Os usuários devem ser capazes de:

- Pesquisar palavras usando o campo de entrada
- Ver a resposta da Free Dictionary API (https://dictionaryapi.dev/) para a palavra pesquisada
- Ver uma mensagem de validação ao tentar enviar um formulário em branco
- Reproduzir o arquivo de áudio de uma palavra quando disponível
- Alternar entre fontes serifadas, sem serifa e monoespaçadas
- Alternar entre temas claro e escuro
- Visualizar o layout ideal para a interface dependendo do tamanho da tela do dispositivo
- Ver estados de hover e foco para todos os elementos interativos

## Observações:

- A API às vezes retorna múltiplos resultados para uma palavra, incluindo
- fonéticas e arquivos de áudio. Escolha a melhor maneira de lidar com isso.
- O URL da fonte deve abrir uma nova janela no navegador.
- (Evite utilizar qualquer tipo de AI)
- O projeto deve ser colocado no github em um repositório aberto e enviado o link

## Obrigatório:

- React
- Typescript
- Sinta-se a vontade para usar libs e ferramentas como bootstrap, tailwind, styledcomponents, shadcn, zod, e outras

## Funcionalidades desenvolvidas

- **Busca de Palavras**: Consulte definições de qualquer palavra em inglês
- **Pronúncia**: Ouça como as palavras são pronunciadas
- **Múltiplas Definições**: Veja diferentes significados e exemplos de uso
- **Classificação Gramatical**: Identifique substantivos, verbos, adjetivos, etc.
- **Sinônimos e Antônimos**: Descubra palavras relacionadas
- **Tema Claro/Escuro**: Alterne entre os modos para melhor leitura
- **Seleção de Fontes**: Escolha entre Sans-serif, Serif e Monospace
- **Design Responsivo**: Funciona em computadores, tablets e celulares

## Tecnologias Utilizadas

- **React**: Para construção da interface
- **TypeScript**: Para maior segurança no código
- **Tailwind CSS**: Para estilização
- **Shadcn UI**: Biblioteca de componentes
- **React Query**: Para busca eficiente de dados
- **API de Dicionário**: [Free Dictionary API](https://dictionaryapi.dev/)

## Como Iniciar

1. Clone o repositório
2. Instale as dependências:

   ```
   npm install
   ```

   ou

   ```
   npm install --legacy-peer-deps
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

## Como Usar

1. Digite uma palavra na barra de busca e pressione Enter
2. Veja a definição, pronúncia e exemplos da palavra
3. Clique no botão de áudio para ouvir a pronúncia
4. Use o botão de tema para alternar entre modo claro e escuro
5. Use o seletor de fontes para mudar a fonte do aplicativo
