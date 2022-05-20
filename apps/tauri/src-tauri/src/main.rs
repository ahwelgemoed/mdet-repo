#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn hello_string() -> String {
  "Hello from Rust!".into()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![hello_string])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}