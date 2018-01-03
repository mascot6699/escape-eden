greaterThan(QT_MAJOR_VERSION, 4):QT += widgets webkitwidgets

# Add more folders to ship with the application, here
folder_01.source = html
folder_01.target = .
DEPLOYMENTFOLDERS = folder_01

# Define TOUCH_OPTIMIZED_NAVIGATION for touch optimization and flicking
#DEFINES += TOUCH_OPTIMIZED_NAVIGATION

LIBS += -lboost_system

# The .cpp file which was generated for your project. Feel free to hack it.
SOURCES += main.cpp \
    cryptoutils.cpp \
    cryptonote/base58.cpp \
    cryptonote/crypto.cpp \
    cryptonote/crypto-ops.c \
    cryptonote/crypto-ops-data.c \
    cryptonote/keccak.c \
    cryptonote/hash.c \
    cryptonote/random.c

# Please do not modify the following two lines. Required for deployment.
include(html5applicationviewer/html5applicationviewer.pri)
qtcAddDeployment()

RESOURCES +=

HEADERS += \
    cryptoutils.h \
    cryptonote/base58.h \
    cryptonote/crypto.h \
    cryptonote/crypto-ops.h \
    cryptonote/int-util.h \
    cryptonote/keccak.h \
    cryptonote/varint.h \
    cryptonote/generic-ops.h \
    cryptonote/hash.h \
    cryptonote/pod-class.h \
    cryptonote/hash-ops.h \
    cryptonote/random.h \
    cryptonote/initializer.h \
    cryptonote/cryptonote_basic.h \
    cryptonote/serialization/vector.h \
    cryptonote/serialization/variant.h \
    cryptonote/serialization/string.h \
    cryptonote/serialization/serialization.h \
    cryptonote/serialization/json_utils.h \
    cryptonote/serialization/json_archive.h \
    cryptonote/serialization/debug_archive.h \
    cryptonote/serialization/crypto.h \
    cryptonote/serialization/binary_utils.h \
    cryptonote/serialization/binary_archive.h \
    cryptonote/string_tools.h \
    cryptonote/serialization/keyvalue_serialization.h \
    cryptonote/serialization/enableable.h \
    cryptonote/serialization/keyvalue_serialization_overloads.h \
    cryptonote/cryptonote_config.h

QMAKE_CXXFLAGS += -std=c++0x
