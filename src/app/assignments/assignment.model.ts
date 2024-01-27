export class Assignment {
  id!:number
  nom!:string
  dateDeRendu!:Date
  matiere_id!:Number | undefined
  enseignant_id!:number
  rendu!:boolean
  note!: number
  auteur_id!:number
  comment!:string
}