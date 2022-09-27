import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    //Caso tenha valores faz a comparação dos dados ao salvar novo usuario - msg
    //Senha deve ser diferente do usuário
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
