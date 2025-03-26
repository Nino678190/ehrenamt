#!/bin/bash

# Verzeichnis mit Bildern
directory="./"  # Hier ggf. den Pfad anpassen

# Ausgabe-Verzeichnis für WebP-Bilder
output_directory="./webp_output"
mkdir -p "$output_directory"

# Durchsuche das Verzeichnis nach Bildern und konvertiere sie
for file in "$directory"/*.{png,jpeg,jpg}; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        filename_noext="${filename%.*}"
        ffmpeg -i "$file" -q:v 80 "$output_directory/$filename_noext.webp"
        echo "Konvertiert: $file -> $output_directory/$filename_noext.webp"
    fi
done

echo "Alle Bilder wurden erfolgreich in WebP konvertiert!"
