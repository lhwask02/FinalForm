export class Enseignant{

      Matricule:number=0;
      Nom:string ="N";
      Prenom:string ="P";
      N_Tel:string ="T";
      Email:string ="E";
      Salaire_de_Base:number=0;
      Imgsrc:string="I";
  
  
      constructor( 
      matricule:number=0,
      nom:string ="N",
      prenom:string ="P",
      n_Tel:string ="T",
      email:string ="E",
      salaire_de_Base:number=0,
      imgsrc:string="I")
      {
        this.Nom=  nom;
        this.Prenom= prenom;
        this.N_Tel=  n_Tel;
        this.Email=  email;
        this.Salaire_de_Base=  salaire_de_Base;
        this.Imgsrc=  imgsrc;
        this. Matricule=matricule;
      }
  
   
  }