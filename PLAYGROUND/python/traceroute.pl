#!/usr/bin/perl
#
use warnings;
use strict;
print "here we go\n";
my $ip = $ARGV[0];
my $date = `date +%Y%m%d%H%M`;
chomp($date);
use lib '/data/script/swish/lib/perl';

use randomGen;

my $randN = randomGen->returnRand();
chomp($randN);
my $user = $date . $randN;
chomp($date);
my $currentDate = $date;
my @res = `traceroute -n  -w 3  -q 3 $ip -m 20`;
print "done is done\n";
if ( @res ) { 
        chomp($res[-1]);
        print "res-1 is $res[-1]\n";
        if ($res[-1] =~ /\*/) {
                print "failed\n";
                exit 1;
        } else {
                print "success\n";
        }
} else {
        print "failed\n";
        exit 1;
}

#my $outputfile = '/home/rlee/script/noderest/brixreplacementConcept/dbStatic/' . $ip;
#open IN, '>>', $outputfile, or die "cannot write to here $!\n";
if ( $res[0] =~ /traceroute to/ ) {
        for (@res) {
                chomp;
                print  $currentDate . '|' . "$_\n";
        }
} else {
        print "invalid input\n";
}
#close IN;
__END__