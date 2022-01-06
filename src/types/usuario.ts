import { Category } from "./catergory";

export type Usuario = {
  id: number;
  nome: string;
  cpf: number;
  salario: number;

  categories: Category[];
 
}