export class MoviesModel{
    id='';
    title='';
    description?='';
    genre='';
    // groupMembers:string[]=[];
    // projectNumber=0;

    static fromObject(object:any):MoviesModel{
        const p:MoviesModel=new MoviesModel();
        p.title=object.title;
        p.description=object.description;
        p.genre=object.genre;
        // p.groupMembers=object.groupMembers;
        // p.projectNumber=object.projectNumber;
        return p;
    }
    toObject():any{
		return {title:this.title,description:this.description,groupid:this.genre};
        // return {name:this.name,description:this.description,groupid:this.genre,groupMembers:this.groupMembers,projectNumber:this.projectNumber};
    }
}