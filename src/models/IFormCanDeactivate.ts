export interface IFormCanDeativate {

  /**
   * Perguntar ao usuário se deseja sair da página (alterar  rota) mesmo havendo alterações no formulário.
   */
  canExit(): boolean;
}
