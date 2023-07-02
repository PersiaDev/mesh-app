
type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

type Folder = {
  id: string,
  name: string,
  parent:string | null,
  createdAt: Date,
  createdBy: string,
  updatedAt: Date,
  updatedBy: string,
  acl:Array,
  allowWrite: boolean,
  allowPublish: boolean,
  contentSize: number
}
