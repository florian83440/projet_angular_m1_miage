export class Assignment {
  _id!:number
  id!:number
  nom!:string
  dateDeRendu!:Date
  matiere_id!:number | undefined
  enseignant_id!:number | undefined
  rendu!:boolean
  note!: number | undefined
  auteur_id!:number | undefined
  comment!:string
}