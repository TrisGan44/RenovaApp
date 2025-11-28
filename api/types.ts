export type Role = {
  id_role: number;
  nama_role?: string;
  Nama_Role?: string;
};

export type User = {
  id_user: number;
  Nama_Lengkap: string;
  email: string;
  password?: string;
  alamat?: string;
  no_telp?: string;
  id_role: number;
};

export type Admin = {
  id_admin: number;
  status: string;
  id_user: number;
  Nama_Lengkap: string;
  email: string;
  alamat?: string;
  no_telp?: string;
  id_role: number;
};

export type Arsitek = {
  id_arsitek: number;
  status: string;
  id_user: number;
  Nama_Lengkap: string;
  email: string;
  alamat?: string;
  no_telp?: string;
  id_role: number;
};

export type Mandor = {
  id_mandor: number;
  status: string;
  id_user: number;
  Nama_Lengkap: string;
  email: string;
  alamat?: string;
  no_telp?: string;
  id_role: number;
};

export type Project = {
  id_proyek: number;
  nama_proyek: string;
  tgl_proyek: string;
  status: string;
  id_user: number;
  id_mandor: number;
  id_arsitek: number;
};

export type ProjectDetailResponse = {
  project: Project;
  laporanProjects: LaporanProject[];
  laporanDesigns: LaporanDesign[];
};

export type Janji = {
  id_janji: number;
  keperluan: string;
  status: string;
  id_user: number;
  nama_user?: string;
};

export type JadwalArsitek = {
  id: number;
  tanggal_Kerja: string;
  jam_masuk: string;
  id_arsitek: number;
  nama_arsitek?: string;
};

export type JadwalMandor = {
  id: number;
  tanggal_Kerja: string;
  jam_masuk: string;
  id_mandor: number;
  nama_mandor?: string;
};

export type LaporanProject = {
  id_laporanProject: number;
  Nama_Laporan: string;
  Tanggal_Laporan: string;
  Tahap_Project?: string;
  Foto?: string;
  id_Mandor?: number;
  id_user?: number;
  id_proyek?: number;
  namaUser?: string;
  id_mandor?: number;
  Nama_Proyek?: string;
};

export type LaporanDesign = {
  id_design: number;
  nama: string;
  tgl_design: string;
  keterangan: string;
  Gambar?: string;
  id_user?: number;
  id_proyek?: number;
  namaUser?: string;
  nama_proyek?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type CreateUserPayload = {
  Nama_Lengkap: string;
  password: string;
  alamat?: string;
  no_telp?: string;
  email: string;
  id_role?: number;
};

export type UpdateUserPayload = {
  Nama_Lengkap: string;
  alamat?: string;
  no_telp?: string;
  email: string;
  id_role: number;
};

export type AdminRegistrationPayload = {
  Nama_Lengkap: string;
  email: string;
  password: string;
  alamat?: string;
  no_telp?: string;
};

export type ArsitekRegistrationPayload = {
  Nama_Lengkap: string;
  email: string;
  password: string;
  alamat?: string;
  no_telp?: string;
};

export type MandorRegistrationPayload = {
  Nama_Lengkap: string;
  email: string;
  password: string;
  alamat?: string;
  no_telp?: string;
};

export type ProjectPayload = {
  nama_proyek: string;
  tgl_proyek: string;
  status?: string;
  id_user: number;
  id_mandor: number;
  id_arsitek: number;
};

export type JanjiPayload = {
  keperluan: string;
  id_user: number;
};

export type UpdateJanjiStatusPayload = {
  status: string;
};

export type JadwalArsitekPayload = {
  tanggal_Kerja: string;
  jam_masuk: string;
  id_arsitek: number;
};

export type JadwalMandorPayload = {
  tanggal_Kerja: string;
  jam_masuk: string;
  id_mandor: number;
};

export type LaporanProjectPayload = {
  Nama_Laporan: string;
  Tanggal_Laporan: string;
  Tahap_Project?: string;
  Foto?: string;
  id_Mandor?: number;
  id_user?: number;
  id_proyek?: number;
};

export type LaporanDesignPayload = {
  nama: string;
  tgl_design: string;
  keterangan: string;
  Gambar?: string;
  id_user?: number;
  id_proyek?: number;
};

export type UserLoginResponse = {
  message: string;
  user: User;
};

export type AdminLoginResponse = {
  message: string;
  role: 'admin';
  admin: Admin;
};

export type ArsitekLoginResponse = {
  message: string;
  role: 'arsitek';
  arsitek: Arsitek;
};

export type MandorLoginResponse = {
  message: string;
  role: 'mandor';
  mandor: Mandor;
};
