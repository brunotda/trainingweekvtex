# VTEX TRAINING WEEK

## Comandos interessantes
- CLI ` __runtime__.route.Params.Id` para capturar id do produto
- Problema com rota? Aplciativo pode estar em concorrencia, execute `vtex workspace reset` e `link` novamente
- Adicione na url `/?__inspect` para abrir o inspecionar elemento VTEX

## Blocos interessantes
- `"__fold__"`, lazyload abaixo **IMPORTANTE**.
- `experimentalOptimizeRendering`, lazyload menu **importante**

### Há três diferentes tipos de workspaces
- Workspace de desenvolvimento: um ambiente onde é possível linkar, desenvolver, instalar e publicar aplicações. É um workspace onde você tem mais liberdade nas configurações que irá fazer. Não lida com o tráfego de clientes de produção, não pode ser promovido a master e nem pode ser utilizado para testes A/B;

- Workspace de produção: lida com tráfego de lojas em produção, pode ser utilizado para testes A/B e pode ser promovido ao workspace master. Não é permitido linkar aplicações;

- Workspace Master: um workspace de produção único em que o conteúdo dele reflete no que é apresentado ao usuário final da loja.


# Store Block course template

Here you'll learn how to create awesome Store Framework blocks!
https://github.com/vtex-trainings/store-block-template

### BLCOSO CUSTOMIZADOS
De forma a torna a experiência de compra da loja única, é possível aplicar camadas de customização aos componentes já existentes, criar páginas customizadas, entre outras coisas.

#### vendor
Define o nome da conta VTEX que está desenvolvendo a app. Esta conta é responsável por sua manutenção e distribuição (a aplicação pode ser instalada em outras contas ou apenas na própria).

`O vendor vtex é utilizado para apps nativas.`

#### name
Identifica o nome da aplicação. Não deve conter nenhum caractere especial (exceto por -, que é permitido) ou caracteres maiúsculos.

####  version
Identifica a versão atual da app. Utilizamos a especificação de Versionamento Semântico 2.0.0. O formato é bem definido, dividido em releases de patch, minor ou major.