export class Assignment {
  id!:number
  nom!:string
  dateDeRendu!:Date
  matiere_id!:number | undefined
  enseignant_id!:number | undefined
  rendu!:boolean
  note!: number | undefined
  auteur_id!:number
  comment!:string
}