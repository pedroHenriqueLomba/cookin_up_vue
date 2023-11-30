import type ICategoria  from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function obterCategorias() {
    const apiUrl = 'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json';

    const resposta = await fetch(apiUrl);

    const categorias: ICategoria[] = await resposta.json();

    return categorias;

}

export async function obterTodasReceitas() {
    const apiUrl = 'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json';

    const resposta = await fetch(apiUrl);

    const receitas: IReceita[] = await resposta.json();

    return receitas;

}