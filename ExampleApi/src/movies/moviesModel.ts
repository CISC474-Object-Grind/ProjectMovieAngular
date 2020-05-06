export class MoviesModel{
    id='';
    name='';
    description?='';
    groupid='';
    groupMembers:string[]=[];
    semester='';
    projectNumber=0;

    static fromObject(object:any):MoviesModel{
        const p:MoviesModel=new MoviesModel();
        p.name=object.name;
        p.description=object.description;
        p.groupid=object.groupId;
        p.groupMembers=object.groupMembers;
        p.semester=object.semester
        p.projectNumber=object.projectNumber;
        return p;
    }
    toObject():any{
        return {name:this.name,description:this.description,groupid:this.groupid,groupMembers:this.groupMembers,semester:this.semester,projectNumber:this.projectNumber};
    }
}