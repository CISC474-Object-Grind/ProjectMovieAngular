export class ShowsModel {
	id = '';
	name = '';
	description?= '';
	groupid = '';
	groupMembers: string[] = [];
	semester = '';
	projectNumber = 0;

	static fromObject(object: any): ShowsModel {
		const p: ShowsModel = new ShowsModel();
		p.name = object.name;
		p.description = object.description;
		p.groupid = object.groupId;
		p.groupMembers = object.groupMembers;
		p.semester = object.semester
		p.projectNumber = object.projectNumber;
		return p;
	}
	toObject(): any {
		return { name: this.name, description: this.description, groupid: this.groupid, groupMembers: this.groupMembers, semester: this.semester, projectNumber: this.projectNumber };
	}
}