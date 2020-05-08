export class MoviesModel{
    id='';
    title='';
    description?='';
    genre='';
    
    static fromObject(object:any):MoviesModel{
        const p:MoviesModel=new MoviesModel();
        p.title=object.title;
        p.description=object.description;
        p.genre=object.genre;
        return p;
    }
    toObject():any{
		return {title:this.title,description:this.description,groupid:this.genre};
        // return {name:this.name,description:this.description,groupid:this.genre,groupMembers:this.groupMembers,projectNumber:this.projectNumber};
    }
}