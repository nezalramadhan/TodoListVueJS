# To-Do List Application

## Deskripsi
Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, dan menghapus catatan to-do.

## Instalasi
1. Clone repository pada github ini dengan "git clone <url github ini >".
2. Jalankan `npm install` untuk menginstal dependensi.
3. Jalankan `npm run serve` untuk memulai aplikasi.

## State Management
Menggunakan Pinia untuk mengelola state aplikasi:
- **State**: Menyimpan daftar to-do.
- **Mutations**: Menambah, mengedit, dan menghapus to-do.
- **Actions**: Menambah to-do secara asinkron. 

## petunjuk penggunaan 
- add new todo untuk menambahkan catatan atau todo list
- jika sudah ditambahkan, akan muncul edit dan delete
- edit untuk mengedit catatan atau todo yang kita input
- dan delete untuk menghapus nya

## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
