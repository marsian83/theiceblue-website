import os


def rename_files(directory):
    i = 1
    for filename in os.listdir(directory):
        extension = os.path.splitext(filename)[1]
        os.rename(os.path.join(directory, filename),
                  os.path.join(directory, str(i) + extension))
        i += 1


# Example usage:
rename_files("./gallery")
