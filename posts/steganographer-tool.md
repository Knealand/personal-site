---
title: 'steganographer command-line tool'
date: 2023-09-21
layout: post.njk
description: "Python script appears to be a command-line tool for embedding files or text into JPEG images and decoding the embedded content from JPEG images."
tag: '[PY]'
link: ''
weblink: ''
tags:
  - post
  - project
---
## Steganographer command-line tool
---
### Links:
<a class="ls-link" href="https://github.com/Knealand/blur">Github</a>  

&nbsp;

### Features:
- Embed files or text within JPG images.
- Simple and user-friendly command-line interface.
- Cross-platform support (Windows, macOS, Linux).

&nbsp;

### Functions:
- check_output_dir(): Placeholder function (TODO).
- identify_file(content): Identifies the file extension based on the provided content using the fleep library.
- embed_jpg(file_path, image_path): Embeds the content of a file into a JPEG image.
- decode_jpg(image_path): Decodes content embedded in a JPEG image and saves it to a file.
- embed_text(image_path, data): Embeds text data into a JPEG image.
- validate_file_path(file_path): Validates and returns an absolute file path.
- validate_image(image_path): Validates and returns an absolute image file path.

&nbsp;

### Main Execution:

- Parses command-line arguments using argparse.
- Supports the following command-line options:
        -f or --file: Input file to embed.
        -i or --image: Image host path.
        -t or --text: Text to embed.
        -d or --decode: Flag to activate decoding mode.
- Checks the mode (encoding or decoding) and executes the corresponding functionality.

&nbsp;

### Usage:

- To encode a file: python script.py -f input_file -i image_file
- To encode text: python script.py -i image_file -t "text to embed"
- To decode: python script.py -i image_file -d

&nbsp;

### Notes:

- The script s assume a specific output directory (/output/).
- There are placeholders for error handling (TODO).
- The code structure is modular, with separate functions for different tasks.
- Some exception handling is in place for file and image operations.

&nbsp;

### Next Steps:

Enhance error handling in other parts of the code to provide informative error messages and gracefully handle various errors. I also plan to add support for embedding multiple files into an image or extracting multiple embedded files from an image, embedding in addtional image types (.png). 

I would also like to add a progress indicator during file processing to keep users informed, especially for larger files.

Lastly, adding encryption and compression of embedded content would be fun.